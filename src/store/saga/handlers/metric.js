import { call, put } from "redux-saga/effects"
import { requestGettMetric } from "../requests/metric"
import { setMetric } from "../../reducer/metricSlice";


export function* handleGetmetric() {
    try {
      const response = yield call(requestGettMetric)
      const { data } = response;
      yield put(setMetric({...data}));
    } catch (error) {
        console.log(error)
    }
}