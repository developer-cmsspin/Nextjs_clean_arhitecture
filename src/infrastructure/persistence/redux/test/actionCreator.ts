'use client';
import IGetCliUseCase from '@/domain/interfaces/application/useCase/iGetCliUseCase';
import RequestExchangeDto from '@/domain/test/dtos/requestExchangeDto';
import { getDependency } from '@/shared/hooks/architecture/dependency';
import { call, takeLatest } from 'redux-saga/effects';

/**
 * The LoadAction generator function.
 *
 * @remarks
 * This function is a Redux Saga generator that handles the 'test/load' action. It retrieves an instance of the `IGetCliUseCase` dependency,
 * and calls its `handler` method with a `RequestExchangeDto` object.
 */
function* LoadAction(): any {
  const homeApplication = getDependency<IGetCliUseCase>('IGetCliUseCase');
  yield call(async () => await homeApplication.handler(new RequestExchangeDto()));
}

/**
 * The testSaga generator function.
 *
 * @remarks
 * This function is a Redux Saga generator that listens for the 'test/load' action and invokes the `LoadAction` generator function when triggered.
 */
export default function* testSaga(): any {
  yield takeLatest('test/load', LoadAction);
}
