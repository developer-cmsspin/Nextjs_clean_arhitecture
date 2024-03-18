import RequestExchange from '@/domain/test/models/requestExchange';
import ApiTest from '@/infrastructure/service/Test/ApiTest';
import { AxiosInstance, AxiosResponse } from 'axios';
import { It, Mock } from 'moq.ts';

describe('Call API', () => {
  test('happy path call api', async () => {
    const request: RequestExchange = new RequestExchange(1, 1);
    const response: AxiosResponse = new Mock<AxiosResponse>().object();
    response.data = { data: [{ id: 1, name: 'name', price_usd: 1 }] };
    const http = new Mock<AxiosInstance>();
    http.setup((instance) => instance.get(It.IsAny())).returns(Promise.resolve(response));

    const api: ApiTest = new ApiTest(http.object());
    const result = await api.execute(request);

    expect(result.list.length).toBe(1);
  });
});
