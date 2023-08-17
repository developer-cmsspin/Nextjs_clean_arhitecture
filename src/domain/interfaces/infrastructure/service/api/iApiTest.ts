interface IApiTest {
  execute(request: RequestCli): Promise<ResponseCli>;
}
