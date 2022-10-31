import { A } from "@solidjs/router"
import { Icon } from "solid-heroicons"
import { arrowUpRight } from "solid-heroicons/solid-mini"
import { JSXElement } from "solid-js"

/**
 * Site navigation bar component, aligned to the top of the screen.
 *
 * TODO:
 * - Mobile version.
 * - Routing.
 */
export default function Navigation() {
	// The links shown on the navigation bar.
	// prettier-ignore
	const links: { display: string; href: string; target?: string; icon?: JSXElement }[] = [
		{ display: "Home", href: "/" },
		{ display: "Projects", href: "/projects" },
		{ display: "Wiki", href: "/wiki" },
		{
			display: "Map",
			href: "https://map.prosperitymc.net",
			target: "blank",
			icon: <Icon path={arrowUpRight} class="inline w-4 h-4 self-bottom" />
		},
		{
			display: "Donate",
			href: "https://ko-fi.com",
			target: "blank",
			icon: <Icon path={arrowUpRight} class="inline w-4 h-4 self-bottom" />
		}
	]

	return (
		<div class="flex py-8 self-center fixed top-0 left-0 right-0 bg-zinc-800/30 backdrop-blur-md">
			<div class="standard-width flex self-center">
				<div class="w-8 h-8 bg-amber-400 shrink-0 rounded-md" />
				<span class="justify-center w-full flex gap-14 self-center font-semibold">
					{links.map((i) => (
						<A
							class="text-zinc-200"
							href={i.href}
							target={i.target}
							activeClass="text-zinc-50"
							end={true}>
							{i.display}
							{i.icon}
						</A>
					))}
				</span>
				<button class="bg-zinc-800 border-2 border-amber-400 text-amber-400 px-10 py-1.5 rounded-md shadow-amber-400/20 shadow-md font-semibold">
					Join
				</button>
			</div>
		</div>
	)
}
