import IGetCliUseCase from "@/domain/interfaces/application/cli/iGetCliUseCase";
import RequestExchangeDto from "@/domain/test/dtos/requestExchangeDto";
import { getDependency } from "@/shared/hooks/dependency";
import { call, takeLatest } from "redux-saga/effects";

function* LoadAction(): any {
  console.log("LoadAction");
  const homeApplication = getDependency<IGetCliUseCase>("IGetCliUseCase");
  yield call(
    async () => await homeApplication.handler(new RequestExchangeDto())
  );
}

export default function* testSaga(): any {
  yield takeLatest("test/load", LoadAction);
}
