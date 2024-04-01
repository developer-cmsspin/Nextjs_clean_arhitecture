import axios from 'axios';
import 'reflect-metadata';
import { container } from 'tsyringe';
import ApiTest from './Test/ApiTest';

export const dependencyInjectionClientInfrastructureService = (): void => {
  container.register('IApiTest', {
    useClass: ApiTest
  });
  container.register('AxiosInstance', {
    useValue: axios
  });
};
export default dependencyInjectionClientInfrastructureService;
