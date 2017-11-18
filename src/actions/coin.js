import { createAction } from "redux-actions";

export const getCoinRequest = createAction("GET_COIN_REQUEST");
export const getCoinSuccess = createAction("GET_COIN_SUCCESS");
export const getCoinFailure = createAction("GET_COIN_FAILURE");
