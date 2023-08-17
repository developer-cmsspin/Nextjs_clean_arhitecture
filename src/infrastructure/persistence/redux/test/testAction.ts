import { useAppDispatch, useAppSelector } from "../hooks";
import { load } from "./reducer";

export default class TestAction implements ITestAction {
  dispatch = useAppDispatch();

  public async LoadExecute(): Promise<void> {
    if (!(await this.GetTestData())) this.dispatch(load());
  }
  public async GetTestData(): Promise<TestInformation> {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useAppSelector((state) => state.reducerCli.client);
  }
  public async GetTestLoading(): Promise<boolean> {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useAppSelector((state) => state.reducerCli.loading);
  }

  SetTest(data: TestInformation): Promise<void> {
    throw new Error("Method not implemented.");
  }
  SetError(error: any): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
