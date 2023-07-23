import axiosPost, {
	type ICreatePost,
	type IPostList,
} from "@/services/axiosPost"

const postActions = {
	postList: async (context: any, dto: IPostList) => {
		const payload = await axiosPost.axiosPostPostList(dto)
		context.commit("postList", payload.data)
	},
	createPost: async (context: any, dto: ICreatePost) => {
		const payload = await axiosPost.axiosPostCreatePost(dto)
		return payload
	},
	postById: async (context: any, dto: { id: number }) => {
		const payload = await axiosPost.axiosPostById(dto)
		context.commit("postById", payload.data)
	},
}

export default postActions
