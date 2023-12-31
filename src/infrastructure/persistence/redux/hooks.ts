import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { RootState, store, type AppDispatch } from "./store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useExternalDispatch = () => store.dispatch;
