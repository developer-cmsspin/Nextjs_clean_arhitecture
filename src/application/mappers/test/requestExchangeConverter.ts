import { mapper } from '@/application/configuration/mappings/mapper';
import RequestExchangeDto from '@/domain/test/dtos/requestExchangeDto';
import RequestExchange from '@/domain/test/entities/requestExchange';
import AbstractConverter from '../abstractConverter';

export default class RequestExchangeConverter extends AbstractConverter<RequestExchange, RequestExchangeDto> {
  public fromDto(dto: RequestExchangeDto): RequestExchange {
    const result = mapper.map(dto, RequestExchange, RequestExchangeDto);
    return result;
  }
  public fromEntity(entity: RequestExchange): RequestExchangeDto {
    const result = mapper.map(entity, RequestExchangeDto, RequestExchange);
    return result;
  }
}
