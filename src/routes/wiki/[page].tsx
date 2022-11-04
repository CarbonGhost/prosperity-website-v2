import { useParams } from "@solidjs/router"
import { JSXElement, lazy } from "solid-js"
import { Suspense } from "solid-js"

import DynamicLink from "../../components/DynamicLink"

export default function Wiki(): JSXElement {
	const route = useParams()
	// The wiki page content. Will navigate to the index page should the route be
	// invalid.
	const Content = lazy(() => import(`../../content/${route.page}.mdx`))

	return (
		<div class="standard-width md:flex space-y-6 md:space-y-0 md:gap-6">
			<Sidebar />
			<article class="md:ml-48 w-4/5">
				{/* Use `Suspense` to wrap the dynamic import from `Content`. */}
				<Suspense>
					<Content />
				</Suspense>
			</article>
		</div>
	)
}

function Sidebar(): JSXElement {
	const links: { displayName: string; href: string }[] = [
		{ displayName: "Index", href: "/wiki/index" },
		{ displayName: "Valid", href: "/wiki/valid" },
	]

	return (
		<div class="bg-zinc-700 md:max-w-40 h-min md:fixed border-zinc-500 w-full md:w-40 px-6 border rounded-md shadow-lg">
			<div class="grid">
				{links.map((i) => (
					<DynamicLink
						class="text-zinc-200 decoration-zinc-500 py-1.5 self-center transform hover:text-zinc-300 duration-150"
						href={i.href}
						activeClass="underline">
						{i.displayName}
					</DynamicLink>
				))}
			</div>
		</div>
	)
}
