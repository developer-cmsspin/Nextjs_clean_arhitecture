import RequestExchangeDto from '@/domain/cli-data/dtos/requestExchangeDto';
import ResponseExchangeDto from '@/domain/cli-data/dtos/responseExchangeDto';

export default interface IGetCliUseCase {
  handler(request: RequestExchangeDto): Promise<ResponseExchangeDto>;
}
