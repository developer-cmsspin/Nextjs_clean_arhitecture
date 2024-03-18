import ResponseExchange from '@/domain/test/models/responseExchange';

export default interface ITestAction {
  GetTestData(): ResponseExchange;
  GetTestLoading(): boolean;
  SetTest(data: ResponseExchange): Promise<void>;
  SetError(error: any): Promise<void>;
  //events
  LoadExecute(): Promise<void>;
}
