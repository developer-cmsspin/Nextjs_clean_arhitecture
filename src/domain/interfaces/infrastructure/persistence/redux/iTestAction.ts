import TestInformation from "@/domain/test/models/testInformation";

export default interface ITestAction {
  GetTestData(): TestInformation;
  GetTestLoading(): boolean;
  SetTest(data: TestInformation): Promise<void>;
  SetError(error: any): Promise<void>;
  //events
  LoadExecute(): Promise<void>;
}
