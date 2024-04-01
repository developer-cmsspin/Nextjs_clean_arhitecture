'use client';
import { configureStore } from '@reduxjs/toolkit';
import testReducer from './test/reducerTest';

// Create the saga middleware instance
//const sagaMiddleware = createSagaMiddleware();

/**
 * The Redux store configuration.
 *
 * @remarks
 * This configuration creates a Redux store using the `configureStore` function from the Redux Toolkit library. It includes the specified reducer,
 * middleware, and runs the rootSaga using the sagaMiddleware instance.
 */
export const store = configureStore({
  reducer: { testReducer } // Combine reducers, here only one reducer (`testReducer`) is provided
  //middleware: [sagaMiddleware] // Apply middleware, here only one middleware (sagaMiddleware) is used
});

/**
 * The RootState type represents the state of the Redux store.
 */
export type RootState = ReturnType<typeof store.getState>;

/**
 * The AppDispatch type represents the dispatch function of the Redux store.
 */
export type AppDispatch = typeof store.dispatch;

// Run the rootSaga using the sagaMiddleware instance
//sagaMiddleware.run(rootSaga);
