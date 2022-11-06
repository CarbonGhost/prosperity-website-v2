import { RouteDataFuncArgs } from "@solidjs/router"
import { JSXElement, lazy } from "solid-js"
import { Dynamic } from "solid-js/web"

/**
 * Data function for the `Wiki` component. This function is run once when the
 * `/wiki/*` route is loaded. The function imports and lazy loads the wiki pages
 * and returns the file which coresponds with the route.
 */
export default function WikiData({ params }: RouteDataFuncArgs): JSXElement {
	const pages = import.meta.glob<any>("../../content/*.mdx")
	const lazyPages: any = {}

	for (const page in pages) {
		lazyPages[page] = lazy(pages[page])
	}

	return <Dynamic component={lazyPages[`../../content/${params.page}.mdx`]} />
}
