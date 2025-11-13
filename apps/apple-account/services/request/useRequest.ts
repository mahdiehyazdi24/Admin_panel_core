"use client";
/* eslint-disable */
import { AsyncThunk } from "@reduxjs/toolkit";
import _ from "lodash";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { useSelector } from "react-redux";
import { InitialState, selectParams, updateParams } from "./slice";
import { useAppDispatch } from "@/redux/hooks";
import { cleanObj } from "@/utils";

interface UseRequestOptions<TParams extends object | never | undefined> {
  firstCall?: TParams;
  persistParamsInUrl?: boolean;
}

type UseRequestOut<TParams extends object | never | undefined> = {
  getData: (e: Partial<TParams>) => void;
  params: TParams;
  loading: boolean;
};

const useRequest = <Tout, TParams extends object | never | undefined = object>(
  callBack: AsyncThunk<Tout, TParams, object>,
  { firstCall, persistParamsInUrl }: UseRequestOptions<TParams> = {}
): UseRequestOut<TParams> => {
  const ref = React.useRef(false);
  const dispatch = useAppDispatch();

  const router = useRouter();
  const searchParams = useSearchParams();

  const params = useSelector<{ request: InitialState }>((x) =>
    selectParams(x, callBack.typePrefix)
  ) as TParams & undefined;

  const loading = useSelector<{ request: InitialState }>(
    (x) => x.request.loading?.[callBack.typePrefix]
  ) as boolean;

  const getDataByUrlParams = React.useCallback(
    (newParams: Partial<TParams>) => {
      if (persistParamsInUrl && "query" in newParams) {
        const currentParams = Object.fromEntries(searchParams);
        const mergedParams = _.mergeWith(
          {},
          currentParams,
          newParams.query,
          (objValue, srcValue) => {
            if (Array.isArray(objValue)) {
              return srcValue;
            }
          }
        );
        const sp = new URLSearchParams(
          cleanObj(mergedParams as object) as Record<string, string>
        );
        router.replace(`?${sp.toString()}`);
        dispatch(callBack({ query: mergedParams } as TParams & undefined));
      }
    },
    [dispatch, callBack, searchParams]
  );

  const getDataByState = React.useCallback(
    (newParams: Partial<TParams>) => {
      if (!persistParamsInUrl) {
        dispatch((dispatch, getState) => {
          const currentParams = selectParams(
            getState() as { request: InitialState },
            callBack.typePrefix
          ) as TParams;
          const mergedParams = _.mergeWith(
            {},
            currentParams,
            newParams,
            (objValue, srcValue) => {
              if (Array.isArray(objValue)) {
                return srcValue;
              }
            }
          );
          dispatch(
            updateParams({ name: callBack.typePrefix, params: mergedParams })
          );
          dispatch(callBack(mergedParams as TParams & undefined));
        });
      }
    },
    [dispatch, callBack]
  );

  React.useEffect(() => {
    if (!ref.current && firstCall) {
      ref.current = true;
      dispatch(updateParams({ name: callBack.typePrefix, params: firstCall }));
      if (persistParamsInUrl) {
        getDataByUrlParams(firstCall);
      } else {
        getDataByState(firstCall);
      }
    }
  }, [persistParamsInUrl, firstCall]);

  return {
    getData: persistParamsInUrl ? getDataByUrlParams : getDataByState,
    params,
    loading,
  };
};

export default useRequest;
