'use client';
import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from './store';

/**
 * A custom hook to access the Redux dispatch function.
 *
 * @remarks
 * This hook returns an instance of the `AppDispatch` type, which can be used to dispatch actions to the Redux store.
 */
export const useAppDispatch: () => AppDispatch = useDispatch;

/**
 * A custom hook to access selected state from the Redux store.
 *
 * @typeparam T - The type of the selected state.
 *
 * @param selector - A function that selects the desired state from the root state.
 * @returns The selected state value.
 *
 * @remarks
 * This hook returns the selected state value using the provided `selector` function. The `TypedUseSelectorHook` ensures type-safety
 * with respect to the root state (`RootState`).
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
