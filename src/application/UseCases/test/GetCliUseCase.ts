import IGetCliUseCase from "@/domain/interfaces/application/cli/iGetCliUseCase";
import type ITestAction from "@/domain/interfaces/infrastructure/persistence/redux/iTestAction";
import type IApiTest from "@/domain/interfaces/infrastructure/service/api/iApiTest";
import RequestExchangeDto from "@/domain/test/dtos/requestExchangeDto";
import ResponseExchangeDto from "@/domain/test/dtos/responseExchangeDto";
import RequestExchange from "@/domain/test/models/requestExchange";

import ResponseExchange from "@/domain/test/models/responseExchange";
import type { Mapper } from "@automapper/core";
import "reflect-metadata";
import { inject, injectable } from "tsyringe";

@injectable()
export default class GetCliUseCase implements IGetCliUseCase {
  private action: ITestAction;
  private api: IApiTest;
  private mapper: Mapper;

  constructor(
    @inject("ITestAction") testAction: ITestAction,
    @inject("IApiTest") api: IApiTest,
    @inject("IMapper") mapper: Mapper
  ) {
    this.action = testAction;
    this.api = api;
    this.mapper = mapper;
  }

  async handler(request: RequestExchangeDto): Promise<ResponseExchangeDto> {
    let requestExchange = this.mapper.map(
      request,
      RequestExchangeDto,
      RequestExchange
    );

    let resultApi = await this.api.execute(requestExchange);
    let result = this.mapper.map(
      resultApi,
      ResponseExchange,
      ResponseExchangeDto
    );
    this.action.SetTest(result);

    return result;
  }
}
