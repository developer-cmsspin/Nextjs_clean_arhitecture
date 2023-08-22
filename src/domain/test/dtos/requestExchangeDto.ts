import { AutoMap } from "@automapper/classes";

export default class RequestExchangeDto {
  public constructor(start: number = 100, limit: number = 100) {
    this.start = start;
    this.limit = limit;
  }

  @AutoMap()
  public start: number = 100;
  @AutoMap()
  public limit: number = 100;
}
