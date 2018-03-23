import { put, takeEvery, call } from "redux-saga/effects";
import { indexData, login } from "./api";

import {
  FETCHING_DATA,
  FETCHING_DATA_SUCCESS,
  FETCHING_DATA_FAILURE,
  REQUEST_LOGIN,
  IS_LOGGED_IN
} from "./constants";

function* fetchData() {
  try {
    const data = yield indexData();
    yield put({ type: FETCHING_DATA_SUCCESS, data });
  } catch (e) {
    yield put({ type: FETCHING_DATA_FAILURE });
  }
}

export function* dataSaga() {
  yield takeEvery(FETCHING_DATA, fetchData);
}

function* loginSaga(action) {
  const userId = yield call(login, action.email, action.password);
  yield put({
    type: IS_LOGGED_IN,
    id: userId
  });
}

export function* requestLoginSaga() {
  yield takeEvery(REQUEST_LOGIN, loginSaga);
}
