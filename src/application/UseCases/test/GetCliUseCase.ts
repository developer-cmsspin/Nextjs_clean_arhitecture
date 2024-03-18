'use client';

import IGetCliUseCase from '@/domain/interfaces/application/useCase/iGetCliUseCase';
import type ITestAction from '@/domain/interfaces/infrastructure/persistence/redux/iTestAction';
import type IApiTest from '@/domain/interfaces/infrastructure/service/api/iApiTest';
import RequestExchangeDto from '@/domain/test/dtos/requestExchangeDto';
import ResponseExchangeDto from '@/domain/test/dtos/responseExchangeDto';
import RequestExchange from '@/domain/test/models/requestExchange';

import ResponseExchange from '@/domain/test/models/responseExchange';
import type { Mapper } from '@automapper/core';
import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';

@injectable()
/**
 * Esta clase me permite obtener la lista de clientes
 * @example
 */
export default class GetCliUseCase implements IGetCliUseCase {
  private action: ITestAction;
  private api: IApiTest;
  private mapper: Mapper;

  constructor(
    @inject('ITestAction') testAction: ITestAction,
    @inject('IApiTest') api: IApiTest,
    @inject('IMapper') mapper: Mapper
  ) {
    this.action = testAction;
    this.api = api;
    this.mapper = mapper;
  }

  /**
   * Este metodo me trae la lista de clientes
   * @param request Rquest aasdasdsa sadasds dasd;asdlasdlasd;asl
   * @returns lista de clientes haboasdfas asdasdaskdals
   */
  public async handler(request: RequestExchangeDto): Promise<ResponseExchangeDto> {
    try {
      const requestExchange = this.mapper.map(request, RequestExchangeDto, RequestExchange);
      //this method have 3 retry to execute
      //TODO: valiate request

      const resultApi = await this.api.execute(requestExchange);
      const result = this.mapper.map(resultApi, ResponseExchange, ResponseExchangeDto);
      this.action.SetTest(result);

      return result;
    } catch (error) {
      this.action.SetError(error);
      console.error(error);
    }

    return new ResponseExchangeDto();
  }
}
