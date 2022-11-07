/* @refresh reload */
import { render } from "solid-js/web"
import { Router } from "@solidjs/router"
import { MetaProvider } from "@solidjs/meta"

import "./index.css"
import App from "./App"

render(
	() => (
		<MetaProvider>
			<Router>
				<App />
			</Router>
		</MetaProvider>
	),
	document.getElementById("root") as HTMLElement
)
