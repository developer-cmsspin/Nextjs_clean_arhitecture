interface ITestAction {
  GetTestData(): TestInformation;
  GetTestLoading(): boolean;
  SetTest(data: TestInformation): Promise<void>;
  SetError(error: any): Promise<void>;
  //events
  LoadExecute(): Promise<void>;
}
