import axios from "./config"
export const getCoinsRequest = config => axios.get('/v1/ticker/', config)
