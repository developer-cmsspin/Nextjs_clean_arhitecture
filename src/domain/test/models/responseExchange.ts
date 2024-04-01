import { AutoMap } from '@automapper/classes';
import ExchangeMoney from './exchangeMoney';

/**
 * The ResponseExchange class represents a response containing exchange information.
 *
 * @remarks
 * This class defines a property called `list` to store an array of `ExchangeMoney` objects representing exchanges.
 * The `@AutoMap` decorator is used to configure automatic mapping during object transformation.
 */
export default class ResponseExchange {
  /**
   * Creates an instance of ResponseExchange.
   *
   * @param listExchange - An optional array of `ExchangeMoney` objects representing exchanges. Default value is an empty array.
   */
  constructor(listExchange: Array<ExchangeMoney> = []) {
    this.list = listExchange;
  }

  /**
   * An array of `ExchangeMoney` objects representing exchanges.
   */
  @AutoMap()
  public list: Array<ExchangeMoney> = [];
}
