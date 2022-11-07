import { useRouteData } from "@solidjs/router"
import { JSXElement } from "solid-js"

import DynamicLink from "../../components/DynamicLink"
import config from "../../content/wiki/config"

export default function Wiki(): JSXElement {
	const data = useRouteData<JSXElement>()

	return (
		<div class="standard-width md:flex md:space-y-0 md:gap-6 space-y-6">
			<Sidebar />
			<article class="md:ml-60">{data}</article>
		</div>
	)
}

function Sidebar(): JSXElement {
	const links = config

	return (
		<div class="bg-zinc-700 h-min md:fixed border-zinc-500 w-in px-6 border rounded-md shadow-lg">
			{links.map((i) => (
				<>
					<header class="text-xs">{i.category}</header>
					<section class="grid">
						{i.links.sort().map((i2) => (
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
