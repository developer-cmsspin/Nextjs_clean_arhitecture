import RequestExchangeConverter from '@/application/mappers/test/requestExchangeConverter';
import ResponseExchangeConverter from '@/application/mappers/test/responseExchangeConverter';
import GetCliUseCase from '@/application/useCases/test/GetCliUseCase';
import ITestAction from '@/domain/interfaces/infrastructure/persistence/redux/iTestAction';
import IApiTest from '@/domain/interfaces/infrastructure/service/api/iApiTest';
import ExchangeMoneyDto from '@/domain/test/dtos/exchangeMoneyDto';
import RequestExchangeDto from '@/domain/test/dtos/requestExchangeDto';
import ResponseExchangeDto from '@/domain/test/dtos/responseExchangeDto';
import ExchangeMoney from '@/domain/test/models/exchangeMoney';
import RequestExchange from '@/domain/test/models/requestExchange';
import ResponseExchange from '@/domain/test/models/responseExchange';
import { describe, test } from '@jest/globals';
import { It, Mock } from 'moq.ts';

/**
 * Tests the happy path scenario of getting exchange information.
 */
describe('Get exchange information', () => {
  /**
   * Tests the handling of getting exchange information in the happy path scenario.
   */
  test('happy path get information', async () => {
    // Prepare request and response data
    const requestMessage = new RequestExchangeDto(1, 1);
    const responseMessage = new ResponseExchange([new ExchangeMoney()]);
    const responseMessageDto = new ResponseExchangeDto([new ExchangeMoneyDto()]);

    // Create a mock instance of ITestAction and set up its methods
    const action = new Mock<ITestAction>();
    action.setup((instance) => instance.Load()).returns();
    action.setup((instance) => instance.SetTest(It.IsAny())).returns();

    // Create a mock instance of Mapper and set up its map methods
    const convertRequest = new Mock<RequestExchangeConverter>();
    convertRequest.setup((instance) => instance.fromDto(It.IsAny())).returns(new RequestExchange(1, 1));

    // Create mock mapper response
    const convertResponse = new Mock<ResponseExchangeConverter>();
    convertResponse.setup((instance) => instance.fromEntity(It.IsAny())).returns(responseMessageDto);

    // private _covertRequest: ConvertRequestExchange;
    // private _covertResponse: ConvertResponseExchange;

    // Create a mock instance of IApiTest and set up its execute method
    const api = new Mock<IApiTest>();
    api.setup((instance) => instance.execute(It.IsAny())).returns(Promise.resolve(responseMessage));

    // Create an instance of GetCliUseCase with the mocked dependencies
    const application = new GetCliUseCase(action.object(), api.object(), convertRequest.object(), convertResponse.object());

    // Execute the handler method and get the response
    const response = await application.handler(requestMessage);

    // Assert the response has expected properties
    expect(response.list.length).toBe(1);
  });
});
