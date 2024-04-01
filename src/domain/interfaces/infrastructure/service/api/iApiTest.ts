import RequestExchangeDto from '@/domain/test/dtos/requestExchangeDto';
import ResponseExchange from '@/domain/test/models/responseExchange';

/**
 * The IApiTest interface defines the contract for an API test.
 *
 * @remarks
 * This interface specifies a single method `execute` that takes a `RequestExchangeDto` object as input and returns a Promise resolving to a `ResponseExchange` object.
 * Implementations of this interface should provide the logic to execute the API test and return the appropriate response.
 */
export default interface IApiTest {
  /**
   * Executes an API test.
   *
   * @param request - The request object containing the details for the API test.
   * @returns A Promise that resolves to a response object representing the result of the API test.
   */
  execute(request: RequestExchangeDto): Promise<ResponseExchange>;
}
