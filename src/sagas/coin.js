import { put, call, takeLatest } from "redux-saga/effects";
import * as actions from "../actions";
import api from "../api";

export function* handleGetCoinRequest(action) {
  try {
    const { data } = yield call(api.getCoinRequest, action.payload);
    yield put(actions.getCoinSuccess(data));
  } catch (error) {
    yield put(actions.getCoinFailure(error));
  }
}

export default [
  takeLatest(actions.getCoinRequest.toString(), handleGetCoinRequest)
];
