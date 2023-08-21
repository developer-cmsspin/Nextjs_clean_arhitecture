import ResponseExchange from "@/domain/test/models/responseExchange";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
} as TestState;

export const test = createSlice({
  name: "test",
  initialState,
  reducers: {
    reset: () => initialState,
    load: (state) => {
      state.loading = true;
    },
    complete: (state, action: PayloadAction<ResponseExchange>) => {
      state.loading = false;
      state.client = action.payload;
    },
    error: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { load, complete, error, reset } = test.actions;
export default test.reducer;
