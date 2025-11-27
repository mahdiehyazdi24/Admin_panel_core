import services from "@/services";
import { createSlice } from "@reduxjs/toolkit";
import { InitialState } from "./type";

const initialState: InitialState = {};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      services.userControllerGetUsersAsyncThunk.fulfilled,
      (state, action) => {
        state.list = action.payload;
      }
    );
  },
});

// export const {  } = usersSlice.actions;
export default usersSlice.reducer;
