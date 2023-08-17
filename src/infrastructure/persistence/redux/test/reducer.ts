import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
} as TestState;

export const reducer = createSlice({
  name: "cli",
  initialState,
  reducers: {
    reset: () => initialState,
    load: (state) => {
      state.loading = true;
    },
    complete: (state, action: PayloadAction<TestInformation>) => {
      state.loading = false;
      state.client = action.payload;
    },
    error: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { load, complete, error, reset } = reducer.actions;
export default reducer.reducer;
