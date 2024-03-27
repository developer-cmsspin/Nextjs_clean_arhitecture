'use client';

import RequestExchangeDto from '@/domain/cli-data/dtos/requestExchangeDto';
import ExchangeMoney from '@/domain/cli-data/models/exchangeMoney';
import ResponseExchange from '@/domain/cli-data/models/responseExchange';
import IApiTest from '@/domain/interfaces/infrastructure/service/api/iApiTest';
import type { AxiosInstance } from 'axios';
import { inject, injectable } from 'tsyringe';
@injectable()
export default class ApiTest implements IApiTest {
  private http: AxiosInstance;
  public constructor(@inject('AxiosInstance') http: AxiosInstance) {
    this.http = http;
  }

  public async execute(request: RequestExchangeDto): Promise<ResponseExchange> {
    const result = new ResponseExchange();
    const message = await this.http.get(
      'https://api.coinlore.net/api/tickers/?start=' + request.start + '&limit=' + request.limit
    );

    message.data.data.forEach((element: any) => {
      result.list.push(new ExchangeMoney(element.id, element.name, element.price_usd));
    });

    if (message.data.data.length == 0) throw new Error('No se encontraron datos');

    return result;
  }
}
