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
const arr = [
	{
		id: 1,
		title: "Nao tomori",
		categories: [
			{
				id: 1,
				category: "van hoa",
			},
			{
				id: 2,
				category: "blog",
			},
		],
		createAt: new Date(),
		user: null,
	},
	{
		id: 2,
		title: "Nao tomori",
		categories: [
			{
				id: 1,
				category: "van hoa",
			},
			{
				id: 2,
				category: "blog",
			},
		],
		createAt: new Date(),
		user: null,
	},
	{
		id: 3,
		title: "Nao tomori",
		categories: [
			{
				id: 1,
				category: "van hoa",
			},
			{
				id: 2,
				category: "blog",
			},
		],
		createAt: new Date(),
		user: null,
	},
]
const postState = (): IPostState => ({
	post: null,
	postList: arr,
})
export default postState
