import { createStore, applyMiddleware } from "redux"

import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./rootReducer";
import { sagaWatcher } from "./sagas"
const saga = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(saga));
saga.run(sagaWatcher);

export default store;