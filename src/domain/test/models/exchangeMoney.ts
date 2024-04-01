import { AutoMap } from '@automapper/classes';

/**
 * The ExchangeMoney class represents an exchange of money.
 *
 * @remarks
 * This class defines properties to store information about an exchange, such as its ID, name, and value.
 * The `@AutoMap` decorator is used to configure automatic mapping during object transformation.
 */
export default class ExchangeMoney {
  /**
   * Creates an instance of ExchangeMoney.
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
