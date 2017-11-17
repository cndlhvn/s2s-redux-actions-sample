import { all } from "redux-saga/effects";
import coins from "./coins";
export default function* rootSaga() {
  yield all([...coins]);
}
