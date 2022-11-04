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
		<div class="standard-width md:flex md:space-y-0 md:gap-6 space-y-6">
			<Sidebar />
			<article class="md:ml-60">
				{/* Use `Suspense` to wrap the dynamic import from `Content`. */}
				<Suspense>
					<Content />
				</Suspense>
			</article>
		</div>
	)
}

function Sidebar(): JSXElement {
	const links: {
		category: string
		subLinks: { displayName: string; href: string }[]
	}[] = [
		{
			category: "",
			subLinks: [{ displayName: "Index", href: "/wiki/index" }]
		},
		{
			category: "Rules & Administration",
			subLinks: [
				{
					displayName: "Admin Overview",
					href: "/wiki/administration-overrview"
				},
				{
					displayName: "Allowed Mods",
					href: "/wiki/allowed-mods"
				},
				{
					displayName: "Server Rules",
					href: "/wiki/rules"
				}
			]
		},
		{
			category: "Guides",
			subLinks: [
				{
					displayName: "New Player Guide",
					href: "/wiki/new-player-guide"
				},
				{
					displayName: "OptiFine Alternatives",
					href: "/wiki/optifine-alternatives"
				}
			]
		}
	]

	return (
		<div class="bg-zinc-700 h-min md:fixed border-zinc-500 w-in px-6 border rounded-md shadow-lg">
			{links.map((i) => (
				<>
					<header class="text-xs">{i.category}</header>
					<section class="grid">
						{i.subLinks.sort().map((i2) => (
							<DynamicLink
								class="text-zinc-200 decoration-zinc-500 py-1.5 self-center transform hover:text-zinc-300 duration-150"
								href={i2.href}
								activeClass="underline">
								{i2.displayName}
							</DynamicLink>
						))}
					</section>
				</>
			))}
		</div>
	)
}
