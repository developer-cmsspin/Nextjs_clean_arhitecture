import RequestExchangeDto from '@/domain/test/dtos/requestExchangeDto';
import ResponseExchangeDto from '@/domain/test/dtos/responseExchangeDto';

/**
 * The IGetCliUseCase interface defines the contract for a use case that handles CLI requests for exchanging currency.
 *
 * @remarks
 * This interface specifies a single method `handler` that takes a `RequestExchangeDto` object as input and returns a Promise resolving to a `ResponseExchangeDto` object.
 * Implementations of this interface should provide the logic to handle the exchange request and generate the appropriate response.
 */
export default interface IGetCliUseCase {
  /**
   * Handles a CLI request for exchanging currency.
   *
   * @param request - The request object containing the exchange details.
   * @returns A Promise that resolves to a response object representing the result of the exchange.
   */
  handler(request: RequestExchangeDto): Promise<ResponseExchangeDto>;
}
