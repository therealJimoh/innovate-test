import { takeLatest } from "redux-saga/effects";
import { handleGetmetric } from "./handlers/metric";
import { getMetric } from "../reducer/metricSlice";

export function* watcherSaga() {
  yield takeLatest(getMetric.type, handleGetmetric);
}
