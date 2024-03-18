import ResponseExchangeDto from '../dtos/responseExchangeDto';

export default class TestState {
  public loading: boolean = false;
  public client: ResponseExchangeDto = new ResponseExchangeDto();
  public error: any = null;
}
