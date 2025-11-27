import request from "@/services/request";
import users from "./slices/users";
import { configureStore } from "@reduxjs/toolkit";
import { type DeepPartial } from "react-hook-form";

const reducer = {
  request,
  users,
};

type ReducersType = {
  request: ReturnType<typeof request>;
  users: ReturnType<typeof users>;
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
