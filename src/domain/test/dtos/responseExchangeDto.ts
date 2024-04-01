import { AutoMap } from '@automapper/classes';
import ExchangeMoneyDto from './exchangeMoneyDto';

/**
 * The ResponseExchangeDto class represents a Data Transfer Object (DTO) for responding with exchange information.
 *
 * @remarks
 * This class defines a property to store a list of `ExchangeMoneyDto` objects representing exchanges.
 * The `@AutoMap` decorator is used to configure automatic mapping during object transformation.
 */
export default class ResponseExchangeDto {
  /**
   * Creates an instance of ResponseExchangeDto.
   *
   * @param listExchange - An array of `ExchangeMoneyDto` objects representing exchanges. Default value is an empty array.
   */
  constructor(listExchange: Array<ExchangeMoneyDto> = []) {
    this.list = listExchange;
  }

  /**
   * A list of `ExchangeMoneyDto` objects representing exchanges.
   */
  @AutoMap()
  public list: Array<ExchangeMoneyDto>;
}
