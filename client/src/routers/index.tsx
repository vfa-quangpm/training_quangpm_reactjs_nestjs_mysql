import { Route, Routes } from "react-router-dom"
import pagesData from "./routers"
import { routerType } from "./type"
import { Footer, Header } from "../components/layout"

function Router() {
	const pageRoutes = pagesData.map(({ path, element, title }: routerType) => {
		return <Route key={title} path={`/${path}`} element={element} />
	})
	return (
		<>
			<Header />
			<Routes> {pageRoutes}</Routes>
			<Footer />
		</>
	)
}

export default Router
