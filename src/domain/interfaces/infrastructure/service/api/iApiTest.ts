import RequestExchangeDto from '@/domain/cli-data/dtos/requestExchangeDto';
import ResponseExchange from '@/domain/cli-data/models/responseExchange';

export default interface IApiTest {
  execute(request: RequestExchangeDto): Promise<ResponseExchange>;
}
