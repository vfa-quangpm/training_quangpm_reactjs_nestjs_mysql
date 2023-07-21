import axiosPost, { type IPostList } from "@/services/axiosPost"

const postActions = {
	postList: async (context: any, dto: IPostList) => {
		const payload = await axiosPost.axiosPostPostList(dto)
		context.commit("postList", payload.data)
	},
}

export default postActions
