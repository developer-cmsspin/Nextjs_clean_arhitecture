import { AutoMap } from "@automapper/classes";

export default class RequestExchange {
  @AutoMap()
  public start: number = 100;
  @AutoMap()
  public limit: number = 100;
}
