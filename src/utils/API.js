import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

instance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
)

instance.defaults.headers.common['Content-Type'] = 'application/json'
// I've putted Accept 'application/json' to not receive a 406 error Not acceptable when I was fetching haircuts
instance.defaults.headers.common['Accept'] = 'application/json'
instance.defaults.timeout = 3000

export default instance
