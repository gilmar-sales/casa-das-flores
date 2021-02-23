import axios from 'axios'
import { getToken, logout } from './auth'

const api = axios.create({ baseURL: 'http://192.168.1.2:3333' })

api.interceptors.request.use(async (config) => {
	const token = getToken()

	if (token) config.headers.Authorization = `Bearer ${token}`

	return config
})

api.interceptors.response.use(
	(response) => Promise.resolve(response),
	(error) => {
		if (error.response.status === 401) {
			logout()
			window.location.href = '/'
		}

		return Promise.reject(error)
	}
)

export default api
