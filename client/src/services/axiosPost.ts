import axiosClient from "./axiosClient"

export interface IPostList {
	id?: number
	title?: string
	page?: number
	limit?: number
}
const axiosPost = {
	axiosPostPostList: (dto: IPostList) => axiosClient.post("post", dto),
}
export default axiosPost
