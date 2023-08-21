import IApiTest from "@/domain/interfaces/infrastructure/service/api/iApiTest";
import RequestExchangeDto from "@/domain/test/dtos/requestExchangeDto";
import ExchangeMoney from "@/domain/test/models/exchangeMoney";
import ResponseExchange from "@/domain/test/models/responseExchange";
import axios from "axios";

export default class ApiTest implements IApiTest {
  public async execute(request: RequestExchangeDto): Promise<ResponseExchange> {
    let result = new ResponseExchange();
    let message = await axios.get(
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
