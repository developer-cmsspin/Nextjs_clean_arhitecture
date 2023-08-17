interface ITestAction {
  GetTestData(): Promise<TestInformation>;
  GetTestLoading(): Promise<boolean>;
  SetTest(data: TestInformation): Promise<void>;
  SetError(error: any): Promise<void>;
  //events
  LoadExecute(): Promise<void>;
}
