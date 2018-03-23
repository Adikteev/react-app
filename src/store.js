import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { routerReducer, routerMiddleware } from "react-router-redux";

import createHistory from "history/createBrowserHistory";

import user from "./reducers/user";
import { dataSaga, requestLoginSaga } from "./saga";

const reducer = combineReducers({
  user,
  router: routerReducer
});

const sagaMiddleware = createSagaMiddleware();
export const history = createHistory();

const enhancer = compose(
  applyMiddleware(sagaMiddleware),
  applyMiddleware(routerMiddleware(history)),
  // eslint-disable-next-line
  window.__REDUX_DEVTOOLS_EXTENSION__ && process.env.NODE_ENV === "development"
    ? // eslint-disable-next-line
      window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f
);

const createAppStore = () => {
  const store = createStore(reducer, enhancer);
  [dataSaga, requestLoginSaga].map(saga => sagaMiddleware.run(saga));
  return store;
};

export const store = createAppStore();
