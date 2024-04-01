import ResponseExchange from '@/domain/test/models/responseExchange';

/**
 * The ITestAction interface defines the contract for an action related to testing.
 *
 * @remarks
 * This interface specifies several methods that can be used to perform different actions related to testing.
 */
export default interface ITestAction {
  /**
   * Retrieves test data.
   *
   * @returns A ResponseExchange object representing the test data.
   */
  GetTestData(): ResponseExchange;

  /**
   * Retrieves the loading state of the test.
   *
   * @returns A boolean indicating if the test is currently loading.
   */
  GetTestLoading(): boolean;

  /**
   * Sets the test data.
   *
   * @param data - The ResponseExchange object representing the test data.
   */
  SetTest(data: ResponseExchange): void;

  /**
   * Sets the error state.
   *
   * @param error - The error object or error message.
   */
  SetError(error: any): void;

  /**
   * Loads the test data.
   */
  Load(): void;
}
