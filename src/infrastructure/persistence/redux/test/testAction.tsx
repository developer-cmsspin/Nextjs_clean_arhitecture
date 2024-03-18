import ITestAction from '@/domain/interfaces/infrastructure/persistence/redux/iTestAction';
import ResponseExchange from '@/domain/test/models/responseExchange';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import 'reflect-metadata';
import { singleton } from 'tsyringe';
import { useAppSelector, useExternalDispatch } from '../hooks';
import { complete, load } from './reducerTest';

@singleton()
export default class TestAction implements ITestAction {
  private dispatch = useExternalDispatch();

  public LoadExecute(): Promise<void> {
    return new Promise<void>(() => {
      const dispatch_data = useDispatch();
      useEffect(() => {
        dispatch_data(load());
      }, []);
    });
  }
  public GetTestData(): ResponseExchange {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useAppSelector((state) => state.testReducer.client);
  }
  public GetTestLoading(): boolean {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useAppSelector((state) => state.testReducer.loading);
  }

  public async SetTest(data: ResponseExchange): Promise<void> {
    this.dispatch(complete(data));
  }
  public async SetError(error: any): Promise<void> {
    this.dispatch(error(error));
  }
}
