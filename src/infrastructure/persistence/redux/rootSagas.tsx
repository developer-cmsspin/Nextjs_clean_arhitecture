'use client';
import { all } from 'redux-saga/effects';
import testSaga from './test/actionCreator';

/**
 * The rootSaga generator function.
 *
 * @remarks
 * This function is the entry point for running Redux Sagas. It uses the `all` effect from Redux Saga to combine multiple sagas.
 * In this case, it combines the `testSaga` saga using an array. The combined sagas are then executed concurrently using the `yield all` syntax.
 */
export default function* rootSaga(): any {
  yield all([testSaga()]);
}
