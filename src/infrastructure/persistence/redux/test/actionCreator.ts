import IGetCliUseCase from "@/domain/interfaces/application/cli/iGetCliUseCase";
import { getDependency } from "@/shared/hooks/dependency";
import { call, takeLatest } from "redux-saga/effects";

function* LoadAction(): any {
  console.log("LoadAction");
  const homeApplication = getDependency<IGetCliUseCase>("IGetCliUseCase");
  yield call(async () => await homeApplication.handler());
}

export default function* testSaga(): any {
  yield takeLatest("test/load", LoadAction);
}
