import { Routes, Route, Navigate } from "@solidjs/router"
import { lazy } from "solid-js"

import WikiPage from "./routes/wiki/[page]"

export default function AppRoutes() {
	return (
		<Routes>
			<Route path="/" component={lazy(() => import("./routes/home"))} />
			<Route
				path="/projects"
				component={lazy(() => import("./routes/projects"))}
			/>
			<Route path="/wiki/:page" component={WikiPage} />
			<Route
				path={["/wiki", "/wiki/home"]}
				element={<Navigate href="/wiki/index" />}
			/>
		</Routes>
	)
}
