import axios from "./setting"
export const getCoinsRequest = config => axios.get('/v1/ticker/', config)
