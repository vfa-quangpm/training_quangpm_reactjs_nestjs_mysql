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
}
export default postMutations
