import { routerType } from "./type"
import About from "../pages/About"
import Blog from "../pages/Blog"
import Home from "../pages/Home"
import NotFound from "../pages/NotFound"

export const enum Path {
	Landing = "",
	Home = "home",
	Blog = "blog",
	About = "about",
	NotFound = "*",
}

const pagesData: routerType[] = [
	{
		path: Path.Landing,
		element: <Home />,
		title: "home",
	},
	{
		path: Path.Home,
		element: <Home />,
		title: "home",
	},
	{
		path: Path.Blog,
		element: <Blog />,
		title: "blog",
	},
	{
		path: Path.About,
		element: <About />,
		title: "about",
	},
	{
		path: Path.About,
		element: <NotFound />,
		title: "NotFound",
	},
]

export default pagesData
