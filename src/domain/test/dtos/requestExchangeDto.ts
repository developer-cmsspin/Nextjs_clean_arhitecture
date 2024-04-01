import { AutoMap } from '@automapper/classes';

/**
 * The RequestExchangeDto class represents a Data Transfer Object (DTO) for requesting exchange information.
 *
 * @remarks
 * This class defines properties to store request-related data, such as the starting index and limit for retrieving exchange data.
 * The `@AutoMap` decorator is used to configure automatic mapping during object transformation.
 */
export default class RequestExchangeDto {
  /**
   * Creates an instance of RequestExchangeDto.
   *
   * @param start - The starting index for retrieving exchange data. Default value is 100.
   * @param limit - The limit of exchanges to retrieve. Default value is 100.
   */
  public constructor(start: number = 100, limit: number = 100) {
    this.start = start;
    this.limit = limit;
  }

  /**
   * The starting index for retrieving exchange data.
   */
  @AutoMap()
  public start: number = 100;

  /**
   * The limit of exchanges to retrieve.
   */
  @AutoMap()
  public limit: number = 100;
}
