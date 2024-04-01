import RequestExchange from '@/domain/test/models/requestExchange';
import ApiTest from '@/infrastructure/service/Test/ApiTest';
import { AxiosInstance, AxiosResponse } from 'axios';
import { It, Mock } from 'moq.ts';

describe('Call API', () => {
  /**
   * Test the happy path of calling the API.
   * @returns A promise that resolves when the test completes.
   */
  test('happy path call api', async () => {
    // Create a new instance of the RequestExchange class with sample values.
    const request: RequestExchange = new RequestExchange(1, 1);

    // Create a mock AxiosResponse object and set its data property.
    const response: AxiosResponse = new Mock<AxiosResponse>().object();
    response.data = { data: [{ id: 1, name: 'name', price_usd: 1 }] };

    // Create a mock AxiosInstance using Moq.ts library.
    const http = new Mock<AxiosInstance>();

    // Set up the mock to return the response when called with any URL.
    http.setup((instance) => instance.get(It.IsAny())).returns(Promise.resolve(response));

    // Create an instance of the ApiTest class passing the mocked AxiosInstance.
    const api: ApiTest = new ApiTest(http.object());

    // Execute the API call and store the result.
    const result = await api.execute(request);

    // Check if the length of the returned list is as expected.
    expect(result.list.length).toBe(1);
  });
});
