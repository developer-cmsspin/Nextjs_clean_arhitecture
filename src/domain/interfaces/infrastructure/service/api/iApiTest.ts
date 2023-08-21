import RequestExchangeDto from "@/domain/test/dtos/requestExchangeDto";
import ResponseExchange from "@/domain/test/models/responseExchange";

export default interface IApiTest {
  execute(request: RequestExchangeDto): Promise<ResponseExchange>;
}
