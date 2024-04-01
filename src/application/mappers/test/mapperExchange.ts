/**
 * The MapperConfigurationExchange module provides functions for configuring mappings between domain model objects and DTOs using AutoMapper.
 *
 * @remarks
 * This module exports a function named `MapperConfigurationExchange` that configures the mappings using the `createMap`, `forMember`, and `mapWith` functions from the '@automapper/core' library.
 */
import ExchangeMoneyDto from '@/domain/test/dtos/exchangeMoneyDto';
import RequestExchangeDto from '@/domain/test/dtos/requestExchangeDto';
import ResponseExchangeDto from '@/domain/test/dtos/responseExchangeDto';
import ExchangeMoney from '@/domain/test/models/exchangeMoney';
import RequestExchange from '@/domain/test/models/requestExchange';
import ResponseExchange from '@/domain/test/models/responseExchange';
import { createMap, forMember, mapWith } from '@automapper/core';
import { mapper } from '../../configuration/mappings/mapper';

/**
 * Configures the mappings between domain models and DTOs for exchanging money.
 *
 * @remarks
 * This function uses the `createMap`, `forMember`, and `mapWith` functions to define the mappings between the source and destination types.
 * It performs the following mappings:
 *
 * - ExchangeMoney to ExchangeMoneyDto
 * - ResponseExchange to ResponseExchangeDto, with a custom mapping for the 'list' property using ExchangeMoneyDto as the source and ExchangeMoney as the destination.
 * - RequestExchangeDto to RequestExchange
 *
 * @example
 * ```
 * MapperConfigurationExchange();
 * ```
 */
export const MapperConfigurationExchange = function () {
  // Map ExchangeMoney to ExchangeMoneyDto
  createMap(mapper, ExchangeMoney, ExchangeMoneyDto);
  createMap(mapper, ExchangeMoneyDto, ExchangeMoney);

  // Map ResponseExchange to ResponseExchangeDto
  createMap(
    mapper,
    ResponseExchangeDto,
    ResponseExchange,
    forMember(
      (destination) => destination.list,
      mapWith(ExchangeMoneyDto, ExchangeMoney, (source) => source.list)
    )
  );

  // Map ResponseExchange to ResponseExchangeDto
  createMap(
    mapper,
    ResponseExchange,
    ResponseExchangeDto,
    forMember(
      (destination) => destination.list,
      mapWith(ExchangeMoneyDto, ExchangeMoney, (source) => source.list)
    )
  );

  // Map RequestExchangeDto to RequestExchange
  createMap(mapper, RequestExchange, RequestExchangeDto);
};
