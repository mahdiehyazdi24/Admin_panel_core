import request from "@/services/request";
import { configureStore } from "@reduxjs/toolkit";
import { type DeepPartial } from "react-hook-form";

const reducer = {
  request,
};

type ReducersType = {
  request: ReturnType<typeof request>;
};
const createStore = (preloadedState?: DeepPartial<ReducersType>) => {
  return configureStore({
    preloadedState: preloadedState as ReducersType,
    reducer,
  });
};

export type AppStore = ReturnType<typeof createStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export default createStore;
