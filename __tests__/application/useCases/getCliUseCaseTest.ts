import GetCliUseCase from "@/application/useCases/test/GetCliUseCase";
import ITestAction from "@/domain/interfaces/infrastructure/persistence/redux/iTestAction";
import IApiTest from "@/domain/interfaces/infrastructure/service/api/iApiTest";
import ExchangeMoneyDto from "@/domain/test/dtos/exchangeMoneyDto";
import RequestExchangeDto from "@/domain/test/dtos/requestExchangeDto";
import ResponseExchangeDto from "@/domain/test/dtos/responseExchangeDto";
import ExchangeMoney from "@/domain/test/models/exchangeMoney";
import RequestExchange from "@/domain/test/models/requestExchange";
import ResponseExchange from "@/domain/test/models/responseExchange";
import { Mapper } from "@automapper/core";
import { describe, test } from "@jest/globals";
import { It, Mock } from "moq.ts";

describe("Get exchange information", () => {
  test("happy path get information", async () => {
    const requestMessage = new RequestExchangeDto(1, 1);
    const responseMessage = new ResponseExchange([new ExchangeMoney()]);
    const responseMessageDto = new ResponseExchangeDto([
      new ExchangeMoneyDto(),
    ]);
    //Action
    const action = new Mock<ITestAction>();
    action
      .setup((instance) => instance.SetTest(It.IsAny()))
      .returns(Promise.resolve());
    //Map
    const map = new Mock<Mapper>();
    map
      .setup((instance) =>
        instance.map(It.IsAny(), RequestExchangeDto, RequestExchange)
      )
      .returns(new RequestExchange(1, 1));
    map
      .setup((instance) =>
        instance.map(It.IsAny(), ResponseExchange, ResponseExchangeDto)
      )
      .returns(responseMessageDto);
    //map
    const api = new Mock<IApiTest>();
    api
      .setup((instance) => instance.execute(It.IsAny()))
      .returns(Promise.resolve(responseMessage));

    const application = new GetCliUseCase(
      action.object(),
      api.object(),
      map.object()
    );
    const response = await application.handler(requestMessage);

    expect(response.list.length).toBe(1);
  });
});
