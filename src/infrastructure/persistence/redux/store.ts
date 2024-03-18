import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSagas';
import testReducer from './test/reducerTest';

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: { testReducer },
  middleware: [sagaMiddleware]
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
sagaMiddleware.run(rootSaga);
