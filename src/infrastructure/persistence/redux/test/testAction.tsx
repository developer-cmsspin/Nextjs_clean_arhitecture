'use client';
import ITestAction from '@/domain/interfaces/infrastructure/persistence/redux/iTestAction';
import ResponseExchange from '@/domain/test/entities/responseExchange';
import { useAppDispatch, useAppSelector } from '../hooks';
import { complete, error, loadInformation } from './reducerTest';

/**
 * The useTestAction hook.
 *
 * @remarks
 * This hook provides functions to interact with the test action and state in Redux.
 *
 * @returns An object implementing the `ITestAction` interface, which contains functions to get test data, test loading status,
 * set test data, set error, and trigger the load operation.
 */
const useTestAction = (): ITestAction => {
  const dispatch = useAppDispatch();
  const clientState = useAppSelector((state) => state.testReducer.client);
  const loadingState = useAppSelector((state) => state.testReducer.loading);

  /**
   * Get the test data.
   *
   * @returns The current test data as a `ResponseExchange` object.
   */
  const GetTestData = (): ResponseExchange => {
    return clientState;
  };

  /**
   * Get the test loading status.
   *
   * @returns A boolean indicating whether the test is currently loading.
   */
  const GetTestLoading = (): boolean => {
    return loadingState;
  };

  /**
   * Set the test data.
   *
   * @param data - The new test data to be set.
   */
  const SetTest = (data: ResponseExchange): void => {
    dispatch(complete(data));
  };

  /**
   * Set the error associated with the test.
   *
   * @param error_payload - The error object or payload to be set.
   */
  const SetError = (error_payload: any): void => {
    dispatch(error(error_payload));
  };

  /**
   * Trigger the load operation for the test.
   */
  const Load = (): void => {
    dispatch(loadInformation());
  };

  return {
    GetTestData,
    GetTestLoading,
    SetTest,
    SetError,
    Load
  };
};

export default useTestAction;
