import type { IPostState } from "./post.state"

const postMutations = {
	reset(state: IPostState) {
		state.post = null
		state.postList = []
	},
	postList(state: IPostState, payload: any) {
		if (payload) {
			state.postList = [...state.postList, ...payload]
		}
	},
	postById(state: IPostState, payload: any) {
		if (payload) {
			state.post = {
				id: payload.id,
				title: payload.title,
				categories: payload.categories,
				content: payload.post,
				createAt: payload.createAt,
			}
		}
	},
}
export default postMutations
