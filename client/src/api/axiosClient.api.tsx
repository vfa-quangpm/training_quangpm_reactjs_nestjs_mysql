import axios from "axios"
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
axiosClient.interceptors.request.use(async function (): Promise<void> {})

// middleware before response
