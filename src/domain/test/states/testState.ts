import ResponseExchangeDto from '../dtos/responseExchangeDto';

/**
 * The TestState class represents the state of a test.
 *
 * @remarks
 * This class defines properties to store information about the state of a test, such as loading status, client data, and error details.
 */
export default class TestState {
  /**
   * Indicates whether the test is currently loading.
   */
  public loading: boolean = false;

  /**
   * The client data of the test, represented by a `ResponseExchangeDto` object.
   */
  public client: ResponseExchangeDto = new ResponseExchangeDto();

  /**
   * Any error that occurred during the test.
   */
  public error: any = null;
}
