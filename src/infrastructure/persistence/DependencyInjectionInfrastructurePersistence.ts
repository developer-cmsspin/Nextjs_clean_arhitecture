import "reflect-metadata";
import { container } from "tsyringe";
import TestAction from "./redux/test/testAction";

export const DependencyInjectionInfrastructurePersistence = (): void => {
  container.register("ITestAction", { useClass: TestAction });
};
export default DependencyInjectionInfrastructurePersistence;
