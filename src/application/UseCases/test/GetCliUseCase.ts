import IGetCliUseCase from "@/domain/interfaces/application/cli/iGetCliUseCase";
import type ITestAction from "@/domain/interfaces/infrastructure/persistence/redux/iTestAction";
import TestInformation from "@/domain/test/models/testInformation";
import "reflect-metadata";
import { inject, injectable } from "tsyringe";

@injectable()
export default class GetCliUseCase implements IGetCliUseCase {
  private action: ITestAction;

  constructor(@inject("ITestAction") private testAction: ITestAction) {
    this.action = testAction;
  }

  async handler(): Promise<TestInformation> {
    let result = new TestInformation();
    result.name = "Test";
    result.id = 1;

    this.action.SetTest(result);

    return result;
  }
}
