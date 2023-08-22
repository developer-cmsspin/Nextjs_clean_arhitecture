import IApiTest from "@/domain/interfaces/infrastructure/service/api/iApiTest";
import RequestExchangeDto from "@/domain/test/dtos/requestExchangeDto";
import ExchangeMoney from "@/domain/test/models/exchangeMoney";
import ResponseExchange from "@/domain/test/models/responseExchange";
import type { AxiosInstance } from "axios";
import { inject, injectable } from "tsyringe";
@injectable()
export default class ApiTest implements IApiTest {
  private http: AxiosInstance;
  public constructor(@inject("AxiosInstance") http: AxiosInstance) {
    this.http = http;
  }

  public async execute(request: RequestExchangeDto): Promise<ResponseExchange> {
    let result = new ResponseExchange();
    let message = await this.http.get(
      "https://api.coinlore.net/api/tickers/?start=" +
        request.start +
        "&limit=" +
        request.limit
    );

    message.data.data.forEach((element: any) => {
      result.list.push(
        new ExchangeMoney(element.id, element.name, element.price_usd)
      );
    });

    return result;
  }
}
