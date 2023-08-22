import ResponseExchangeDto from "../dtos/responseExchangeDto";

class TestState {
  public loading: boolean = false;
  public client: ResponseExchangeDto = new ResponseExchangeDto();
  public error: any = null;
}
