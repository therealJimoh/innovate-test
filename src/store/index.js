import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import { watcherSaga } from "./saga/rootSaga";
import reducer from "./reducer";

const sagaMiddleware = createSagaMiddleware();


export const store = configureStore({
  reducer: reducer,
  middleware: [ sagaMiddleware],
});
sagaMiddleware.run(watcherSaga);
