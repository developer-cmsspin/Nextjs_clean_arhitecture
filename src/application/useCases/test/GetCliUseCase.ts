'use client';

import RequestExchangeConverter from '@/application/mappers/test/requestExchangeConverter';
import ResponseExchangeConverter from '@/application/mappers/test/responseExchangeConverter';
import IGetCliUseCase from '@/domain/interfaces/application/useCase/iGetCliUseCase';
import type ITestAction from '@/domain/interfaces/infrastructure/persistence/redux/iTestAction';
import type IApiTest from '@/domain/interfaces/infrastructure/service/api/iApiTest';
import RequestExchangeDto from '@/domain/test/dtos/requestExchangeDto';
import ResponseExchangeDto from '@/domain/test/dtos/responseExchangeDto';

import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';

@injectable()
/**
 * Esta clase me permite obtener la lista de clientes
 * @example
 */
export default class GetCliUseCase implements IGetCliUseCase {
  private _action: ITestAction;
  private _api: IApiTest;
  private _covertRequest: RequestExchangeConverter;
  private _covertResponse: ResponseExchangeConverter;

  constructor(
    @inject('ITestAction') testAction: ITestAction,
    @inject('IApiTest') api: IApiTest,
    @inject('ConvertRequestExchange') covertRequest: RequestExchangeConverter,
    @inject('ConvertResponseExchange') covertResponse: ResponseExchangeConverter
  ) {
    this._action = testAction;
    this._api = api;
    this._covertRequest = covertRequest;
    this._covertResponse = covertResponse;
  }

  /**
   * Este metodo me trae la lista de clientes
   * @param request Rquest aasdasdsa sadasds dasd;asdlasdlasd;asl
   * @returns lista de clientes haboasdfas asdasdaskdals
   */
  public async handler(request: RequestExchangeDto): Promise<ResponseExchangeDto> {
    try {
      this._action.Load();
      const requestExchange = this._covertRequest.fromDto(request);
      const resultApi = await this._api.execute(requestExchange);
      const result = this._covertResponse.fromEntity(resultApi);
      this._action.SetTest(result);

      return result;
    } catch (error) {
      this._action.SetError(error);
      console.error(error);
    }

    return new ResponseExchangeDto();
  }
}
