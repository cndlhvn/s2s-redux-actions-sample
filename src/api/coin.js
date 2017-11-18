import axios from "../axiosConfig";

export const getCoinRequest = (id, config) =>
  axios.get(`/v1/ticker/${id}/`, config);
