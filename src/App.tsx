import { Routes, Route } from "@solidjs/router"
import { JSXElement } from "solid-js"

import Navigation from "./components/Navigation"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Wiki from "./pages/Wiki"

export default function App(): JSXElement {
	return (
		<>
			{/* Show the navigation on all pages. */}
			<Navigation />

			{/* Container for router pages. Uses `mt-[5.5rem]` in order to add a
			margin for the navigation. */}
			<div class="mt-[5.5rem]">
				<Routes>
					<Route path="/" component={Home} />
					<Route path="/projects" component={Projects} />
					<Route path="/wiki" component={Wiki} />
				</Routes>
			</div>
		</>
	)
}
