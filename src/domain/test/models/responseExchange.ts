import { AutoMap } from "@automapper/classes";
import ExchangeMoney from "./exchangeMoney";

export default class ResponseExchange {
  constructor(listExchange: Array<ExchangeMoney> = []) {
    this.list = listExchange;
  }

  @AutoMap()
  public list: Array<ExchangeMoney> = [];
}
