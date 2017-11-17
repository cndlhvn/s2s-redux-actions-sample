import axios from 'axios'

const API_ROOT = process.env.API_ROOT || 'https://api.coinmarketcap.com'

axios.defaults.timeout = 5000
axios.defaults.baseURL = API_ROOT
axios.defaults.headers.post['Content-Type'] = 'application/json'

export default axios
