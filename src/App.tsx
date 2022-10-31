import { Routes, Route } from "@solidjs/router"

import Navigation from "./components/Navigation"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Wiki from "./pages/Wiki"

/**
 * Root app component.
 */
export default function App() {
	return (
		<>	
			<Navigation />
			<div class="mt-28">
				<Routes>
					<Route path="/" component={Home} />
					<Route path="/projects" component={Projects} />
					<Route path="/wiki" component={Wiki} />
				</Routes>
			</div>
		</>
	)
}
