import { useParams } from "@solidjs/router"
import { JSXElement, lazy } from "solid-js"
import { Suspense } from "solid-js"

export default function Wiki(): JSXElement {
	const route = useParams()
	// The wiki page content. Will navigate to the index page should the route be
	// invalid.
	const Content = lazy(() => import(`../../content/${route.page}.mdx`))

	return (
		<div class="standard-width">
			<article>
				{/* Use `Suspense` to wrap the dynamic import from `Content`. */}
				<Suspense>
					<Content />
				</Suspense>
			</article>
		</div>
	)
}
