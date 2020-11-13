import axios from 'axios'
import { getToken } from './auth'

const port = process.env.PORT || 3333
const url = process.env.HOST_NAME || `http://localhost:${port}`

const api = axios.create({ baseURL: `${url}/api` })

api.interceptors.request.use(async (config) => {
	const token = getToken()

	if (token) config.headers.Authorization = `Bearer ${token}`

	return config
})

export default api
