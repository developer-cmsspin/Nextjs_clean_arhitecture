export default class ApiTest implements IApiTest {
  async execute(request: RequestCli): Promise<ResponseCli> {
    this.delay(3000);
    return new ResponseCli("Test", 33);
  }

  private delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
