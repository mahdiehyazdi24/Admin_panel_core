import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
  PayloadAction,
  UnknownAction,
} from "@reduxjs/toolkit";

export interface InitialState {
  params: Record<string, object>;
  loading: Record<string, boolean>;
}

const initialState: InitialState = {
  params: {},
  loading: {},
};

const requestSlice = createSlice({
  name: "request",
  initialState,
  reducers: {
    updateParams: (
      state,
      action: PayloadAction<{ name: string; params: object }>,
    ) => {
      const { name, params } = action.payload;
      state.params = { ...state.params, [name]: params };
    },
  },

  extraReducers: builder => {
    builder
      .addMatcher(isPending, (state, action: UnknownAction) => {
        const typePrefix = action.type.split("/")?.[0];
        if (typePrefix) state.loading[typePrefix] = true;
      })
      .addMatcher(isFulfilled, (state, action: UnknownAction) => {
        const typePrefix = action.type.split("/")?.[0];
        if (typePrefix) state.loading[typePrefix] = false;
      })
      .addMatcher(isRejected, (state, action: UnknownAction) => {
        const typePrefix = action.type.split("/")?.[0];
        if (typePrefix) state.loading[typePrefix] = false;
      });
  },

  selectors: {
    selectParams: (state, key: string) => state.params[key],
    selectLoading: (state, key: string) => state.loading[key],
  },
});

export const { updateParams } = requestSlice.actions;
export const { selectParams, selectLoading } = requestSlice.selectors;
export default requestSlice.reducer;
