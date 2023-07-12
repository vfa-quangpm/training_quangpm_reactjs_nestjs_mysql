import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios"
import { config } from "dotenv"
import queryString from "query-string"
config()

export const axiosClient = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL,
	timeout: 3000,
	headers: {},
	withCredentials: true,
	paramsSerializer: (params) => queryString.stringify(params),
})

// middleware before request
axiosClient.interceptors.request.use(
	(config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
		return config
	}
)

// middleware before response
axiosClient.interceptors.response.use(
	(response: AxiosResponse): AxiosResponse => response
)
