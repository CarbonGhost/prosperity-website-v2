import { JSXElement } from "solid-js"

import Navigation from "./components/Navigation"
import AppRoutes from "./AppRoutes"

export default function App(): JSXElement {
	return (
		<>
			{/* Show the navigation on all pages. */}
			<Navigation />
			{/* Container for router pages. Uses `mt-[5.5rem]` in order to add a
			margin for the navigation. */}
			<div class="my-[5.5rem]">
				<AppRoutes />
			</div>
		</>
	)
}
