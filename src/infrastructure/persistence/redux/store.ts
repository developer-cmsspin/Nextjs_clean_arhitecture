import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import reducer from "./test/reducer";

//https://github.com/wpcodevo/nextjs13-redux-toolkit/blob/main/src/redux/store.ts
export const store = configureStore({
  reducer: {
    reducerCli: reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
