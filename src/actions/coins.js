import { createAction } from "redux-actions";

export const getCoinsRequest = createAction("GET_COINS_REQUEST");
export const getCoinsSuccess = createAction("GET_COINS_SUCCESS");
export const getCoinsFailure = createAction("GET_COINS_FAILURE");
