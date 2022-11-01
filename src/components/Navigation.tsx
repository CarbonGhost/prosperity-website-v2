import { Icon } from "solid-heroicons"
import {
	ellipsisHorizontal,
	ellipsisVertical
} from "solid-heroicons/solid-mini"
import { createSignal, Show } from "solid-js"

import DynamicLink from "./DynamicLink"
import Button from "./Button"

/**
 * Site navigation bar component, aligned to the top of the screen.
 *
 * TODO:
 * - Mobile version.
 * - Routing.
 */
export default function Navigation() {
	// The links shown on the navigation bar.
	const links: { displayName: string; href: string }[] = [
		{ displayName: "Home", href: "/" },
		{ displayName: "Projects", href: "/projects" },
		{ displayName: "Wiki", href: "/wiki" },
		{ displayName: "Map", href: "https://map.prosperitymc.net" },
		{ displayName: "Donate", href: "https://ko-fi.com" }
	]

	return (
		<>
			<MdNavigation links={links} />
			<SmNavigation links={links} />
		</>
	)
}

/**
 * Navigation component used from the Tailwind `md` breakpoint onwards.
 */
function MdNavigation(props: {
	links: { displayName: string; href: string }[]
}) {
	return (
		<div class="z-50 select-none border-b border-zinc-700 hidden md:flex py-6 self-center fixed top-0 left-0 right-0 bg-zinc-800/30 backdrop-blur-sm">
			<div class="standard-width flex self-center">
				<div class="w-10 h-10 self-center bg-amber-400 shrink-0 rounded" />
				<span class="justify-center w-full flex gap-4 self-center font-semibold">
					{props.links.map((i) => (
						<DynamicLink
							class="text-zinc-200 px-6 py-1.5 self-center hover:no-underline"
							href={i.href}
							activeClass="border rounded bg-zinc-700 border-zinc-500"
							end={true}>
							{i.displayName}
						</DynamicLink>
					))}
				</span>
				<Button>Join</Button>
			</div>
		</div>
	)
}

function SmNavigation(props: {
	links: { displayName: string; href: string }[]
}) {
	const [isVisible, setIsVisible] = createSignal(false)

	return (
		<div class="z-50 select-none border-b border-zinc-700 flex-col md:hidden py-6 self-center fixed top-0 left-0 right-0 bg-zinc-800/30 backdrop-blur-md">
			<div class="standard-width flex justify-between">
				<div class="w-10 h-10 self-center bg-amber-400 shrink-0 rounded-md" />
				<button
					onClick={() =>
						isVisible() ? setIsVisible(false) : setIsVisible(true)
					}>
					<Icon
						path={
							isVisible() ? ellipsisHorizontal : ellipsisVertical
						}
						class="inline w-6 h-6 self-center"
					/>
				</button>
			</div>
			<Show when={isVisible()}>
				<div class="grid standard-width w-full mt-6 gap-y-6 justify-end text-right">
					{props.links.map((i) => (
						<DynamicLink
							class="text-zinc-200 w-[100%] px-6 py-1.5 self-center hover:no-underline"
							href={i.href}
							activeClass="border rounded bg-zinc-700 border-zinc-500"
							end={true}>
							{i.displayName}
						</DynamicLink>
					))}
				</div>
			</Show>
		</div>
	)
}
