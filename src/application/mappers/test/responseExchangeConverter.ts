import { mapper } from '@/application/configuration/mappings/mapper';
import ResponseExchangeDto from '@/domain/test/dtos/responseExchangeDto';
import ResponseExchange from '@/domain/test/models/responseExchange';
import AbstractConverter from '../abstractConverter';

export default class ResponseExchangeConverter extends AbstractConverter<ResponseExchange, ResponseExchangeDto> {
  public fromDto(dto: ResponseExchangeDto): ResponseExchange {
    const result = mapper.map(dto, ResponseExchange, ResponseExchangeDto);
    return result;
  }
  public fromEntity(entity: ResponseExchange): ResponseExchangeDto {
    const result = mapper.map(entity, ResponseExchangeDto, ResponseExchange);
    return result;
  }
}
