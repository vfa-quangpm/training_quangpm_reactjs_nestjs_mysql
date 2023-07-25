export interface IPostItem {
	id: number
	title: string
	categories: { id: number; category: string }[]
	createAt: Date
	user: {
		username: string
	} | null
}
export interface IPost {
	id: number
	title: string
	category: string[]
	content: string
	user: string
	createAt: Date
}
export interface IPostState {
	post: IPost | null
	postList: IPostItem[]
}
const postState = (): IPostState => ({
	post: null,
	postList: [],
})
export default postState
