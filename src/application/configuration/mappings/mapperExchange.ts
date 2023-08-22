import ExchangeMoneyDto from "@/domain/test/dtos/exchangeMoneyDto";
import RequestExchangeDto from "@/domain/test/dtos/requestExchangeDto";
import ResponseExchangeDto from "@/domain/test/dtos/responseExchangeDto";
import ExchangeMoney from "@/domain/test/models/exchangeMoney";
import RequestExchange from "@/domain/test/models/requestExchange";
import ResponseExchange from "@/domain/test/models/responseExchange";
import { createMap, forMember, mapWith } from "@automapper/core";
import { mapper } from "./mapper";

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
