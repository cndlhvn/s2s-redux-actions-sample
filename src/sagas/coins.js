import { put, call, takeLatest } from "redux-saga/effects";
import * as actions from "../actions";
import api from "../api";

export function* handleGetCoinsRequest(action) {
  try {
    const { data } = yield call(api.getCoinsRequest, action.payload);
    yield put(actions.getCoinsSuccess(data));
  } catch (error) {
    yield put(actions.getCoinsFailure(error));
  }
}

export default [
  takeLatest(actions.getCoinsRequest.toString(), handleGetCoinsRequest)
];
