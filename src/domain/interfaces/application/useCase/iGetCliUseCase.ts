import RequestExchangeDto from '@/domain/test/dtos/requestExchangeDto';
import ResponseExchangeDto from '@/domain/test/dtos/responseExchangeDto';

export default interface IGetCliUseCase {
  handler(request: RequestExchangeDto): Promise<ResponseExchangeDto>;
}
