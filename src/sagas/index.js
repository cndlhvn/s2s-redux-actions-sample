import { all } from "redux-saga/effects";
import coin from "./coin";
import coins from "./coins";
export default function* rootSaga() {
  yield all([...coin, ...coins]);
}
