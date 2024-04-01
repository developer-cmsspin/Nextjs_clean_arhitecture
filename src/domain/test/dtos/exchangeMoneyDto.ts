import { AutoMap } from '@automapper/classes';

/**
 * The ExchangeMoneyDto class represents a Data Transfer Object (DTO) for exchanging money information.
 *
 * @remarks
 * This class defines properties to store exchange-related data, such as the ID, name, and value of the exchange.
 * The `@AutoMap` decorator is used to configure automatic mapping during object transformation.
 */
export default class ExchangeMoneyDto {
  /**
   * Creates an instance of ExchangeMoneyDto.
   *
   * @param id - The ID of the exchange. Default value is 0.
   * @param name - The name of the exchange. Default value is an empty string.
   * @param value - The value of the exchange. Default value is 0.
   */
  constructor(id: number = 0, name: string = '', value: number = 0) {
    this.id = id;
    this.name = name;
    this.value = value;
  }

  /**
   * The ID of the exchange.
   */
  @AutoMap()
  id: number = 0;

  /**
   * The name of the exchange.
   */
  @AutoMap()
  name: string = '';

  /**
   * The value of the exchange.
   */
  @AutoMap()
  value: number = 0;
}
