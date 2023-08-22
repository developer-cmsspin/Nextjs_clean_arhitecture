import { AutoMap } from "@automapper/classes";
import ExchangeMoneyDto from "./exchangeMoneyDto";

export default class ResponseExchangeDto {
  constructor(listExchange: Array<ExchangeMoneyDto> = []) {
    this.list = listExchange;
  }

  @AutoMap()
  public list: Array<ExchangeMoneyDto>;
}
