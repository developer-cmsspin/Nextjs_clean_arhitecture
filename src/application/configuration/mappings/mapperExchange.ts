import ExchangeMoneyDto from '@/domain/cli-data/dtos/exchangeMoneyDto';
import RequestExchangeDto from '@/domain/cli-data/dtos/requestExchangeDto';
import ResponseExchangeDto from '@/domain/cli-data/dtos/responseExchangeDto';
import ExchangeMoney from '@/domain/cli-data/models/exchangeMoney';
import RequestExchange from '@/domain/cli-data/models/requestExchange';
import ResponseExchange from '@/domain/cli-data/models/responseExchange';
import { createMap, forMember, mapWith } from '@automapper/core';
import { mapper } from './mapper';

export const MapperConfigurationExchange = function () {
  createMap(mapper, ExchangeMoney, ExchangeMoneyDto);
  createMap(
    mapper,
    ResponseExchange,
    ResponseExchangeDto,
    forMember(
      (destination) => destination.list,
      mapWith(ExchangeMoneyDto, ExchangeMoney, (source) => source.list)
    )
  );
  createMap(mapper, RequestExchangeDto, RequestExchange);
};
