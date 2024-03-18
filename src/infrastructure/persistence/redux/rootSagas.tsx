import { all } from 'redux-saga/effects';
import testSaga from './test/actionCreator';

//https://github.com/wpcodevo/nextjs13-redux-toolkit/blob/main/src/redux/store.ts
export default function* rootSaga(): any {
  yield all([testSaga()]);
}
