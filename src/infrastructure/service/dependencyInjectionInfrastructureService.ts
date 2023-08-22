import axios from "axios";
import "reflect-metadata";
import { container } from "tsyringe";
import TestAction from "../persistence/redux/test/testAction";
import ApiTest from "./Test/ApiTest";

export const DependencyInjectionInfrastructureService = (): void => {
  container.register("IApiTest", {
    useClass: ApiTest,
  });
  container.register("AxiosInstance", {
    useValue: axios,
  });
  container.register("ITestAction", { useClass: TestAction });
};
export default DependencyInjectionInfrastructureService;
