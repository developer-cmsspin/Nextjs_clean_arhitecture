import IGetCliUseCase from "@/domain/interfaces/application/cli/iGetCliUseCase";
import { call, takeLatest } from "redux-saga/effects";
import "reflect-metadata";
import { container } from "tsyringe";

function* LoadAction(): any {
  const homeApplication = container.resolve<IGetCliUseCase>("IHomeApplication");
  yield call(async () => await homeApplication.handler());
}

export default function* testSaga(): any {
  yield takeLatest("cli/load", LoadAction);
}
