import ITestAction from "@/domain/interfaces/infrastructure/persistence/redux/iTestAction";
import TestInformation from "@/domain/test/models/testInformation";
import "reflect-metadata";
import { singleton } from "tsyringe";
import { useAppSelector, useExternalDispatch } from "../hooks";
import { complete, load } from "./reducerTest";

@singleton()
export default class TestAction implements ITestAction {

  private dispatch = useExternalDispatch();

  public async LoadExecute(): Promise<void> {
    if (!(await this.GetTestData())) this.dispatch(load());
  }
  public GetTestData(): TestInformation {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useAppSelector((state) => state.testReducer.client);
  }
  public GetTestLoading(): boolean {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useAppSelector((state) => state.testReducer.loading);
  }

  public async SetTest(data: TestInformation): Promise<void> {
    this.dispatch(complete(data));
  }
  public async SetError(error: any): Promise<void> {
    this.dispatch(error(error));
  }
}
