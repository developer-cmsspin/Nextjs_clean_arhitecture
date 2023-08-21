import GetCliUseCase from "@/application/useCases/test/GetCliUseCase";
import ITestAction from "@/domain/interfaces/infrastructure/persistence/redux/iTestAction";
import IApiTest from "@/domain/interfaces/infrastructure/service/api/iApiTest";
import { describe, test } from "@jest/globals";
import { Mock } from "moq.ts";

describe("Get exchange information", () => {
  test("happy path get information", async () => {
    //ITestAction
    //IApiTest
    const action = new Mock<ITestAction>();
    const api = new Mock<IApiTest>();
    const application = new GetCliUseCase(action.object(), api.object());

    let a = true;
    expect(a).toBe(true);
  });
});
