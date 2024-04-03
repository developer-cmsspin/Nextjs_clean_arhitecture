import IApiTest from '@/domain/interfaces/infrastructure/service/api/iApiTest';
import RequestExchangeDto from '@/domain/test/dtos/requestExchangeDto';
import ExchangeMoney from '@/domain/test/entities/exchangeMoney';
import ResponseExchange from '@/domain/test/entities/responseExchange';
import type { AxiosInstance } from 'axios';
import { inject, injectable } from 'tsyringe';

/**
 * The ApiTest class.
 *
 * @remarks
 * This class implements the IApiTest interface and serves as an implementation of an API service for testing purposes. It utilizes the Axios library to make HTTP requests.
 * The `execute` method sends a GET request to an external API (`https://api.coinlore.net/api/tickers/?start=`) and retrieves exchange data based on the provided `RequestExchangeDto`.
 * The response data is then mapped to a `ResponseExchange` object containing a list of `ExchangeMoney` objects.
 */
@injectable()
export default class ApiTest implements IApiTest {
  private http: AxiosInstance;

  /**
   * Constructor for the ApiTest class.
   *
   * @param http - An instance of AxiosInstance provided through dependency injection.
   */
  public constructor(@inject('AxiosInstance') http: AxiosInstance) {
    this.http = http;
  }

  /**
   * Executes the API request and returns the response.
   *
   * @param request - The RequestExchangeDto object containing the start and limit parameters for the API request.
   * @returns A Promise that resolves to a ResponseExchange object representing the API response.
   * @throws Error if no data is found in the API response.
   */
  public async execute(request: RequestExchangeDto): Promise<ResponseExchange> {
    const result = new ResponseExchange();
    const message = await this.http.get(
      'https://api.coinlore.net/api/tickers/?start=' + request.start + '&limit=' + request.limit
    );

    message.data.data.forEach((element: any) => {
      result.list.push(new ExchangeMoney(element.id, element.name, element.price_usd));
    });

    if (message.data.data.length === 0) {
      throw new Error('No se encontraron datos');
    }

    return result;
  }
}
