import axios from "../axiosConfig";
export const getCoinsRequest = config => axios.get("/v1/ticker/", config);
