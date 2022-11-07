import { Icon } from "solid-heroicons"
import { ellipsisVertical, xMark } from "solid-heroicons/solid-mini"
import { createSignal, JSXElement, Show } from "solid-js"

import DynamicLink from "./DynamicLink"
import Button from "./Button"

export default function Navigation(): JSXElement {
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
			<div class="md:block hidden">
				<MdNavigation links={links} />
			</div>
			<div class="md:hidden block">
				<SmNavigation links={links} />
			</div>
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
		<div class="top-6 fixed z-50 flex w-full mx-auto select-none">
			<div class="standard-width flex justify-between">
				<div class="invisible lg:visible w-[34.4px] h-[34.4px] self-center bg-amber-400 shrink-0 rounded shadow shadow-amber-400/20" />
				<div class="md:absolute md:block hidden mx-auto lg:left-0 lg:right-0 py-1.5 bg-zinc-700 border border-zinc-500 w-fit rounded-md drop-shadow-lg divide-x divide-zinc-500">
					{props.links.map((i) => (
						<DynamicLink
							class="text-zinc-200 decoration-zinc-500 px-6 py-1.5 self-center text-center transform hover:text-zinc-300 duration-150"
							href={i.href}
							end={i.href.includes("wiki") ? false : true}
							activeClass="underline">
							{i.displayName}
						</DynamicLink>
					))}
				</div>
				<Button>Join</Button>
			</div>
		</div>
	)
}

/**
 * Navigation component used below the `sm` breakpoint.
 */
function SmNavigation(props: {
	links: { displayName: string; href: string }[]
}) {
	const [isVisible, setIsVisible] = createSignal(false)

	return (
		<>
			<div class="top-6 fixed z-50 flex w-full mx-auto select-none">
				<div class="standard-width flex justify-between">
					<button
						class="py-1.5 px-3 grow-0 shrink-0 bg-zinc-700 border border-zinc-500 w-fit rounded-md drop-shadow-lg"
						onClick={() =>
							isVisible()
								? setIsVisible(false)
								: setIsVisible(true)
						}>
						{!isVisible() ? (
							<Icon
								path={ellipsisVertical}
								class="self-center inline w-4 h-4 align-middle"
							/>
						) : (
							<Icon
								path={xMark}
								class="self-center inline w-4 h-4 align-middle"
							/>
						)}
					</button>
					<Button>Join</Button>
				</div>
			</div>
			<Show when={isVisible()}>
				<div class="bg-zinc-700 drop-shadow-lg border-zinc-500 fixed top-0 left-0 z-40 w-56 h-screen border-r">
					<div class="mt-[5.5rem] mx-10 grid gap-y-4">
						{props.links.map((i) => (
							<DynamicLink
								class="text-zinc-200 hover:no-underline hover:text-zinc-300 duration-150 transform"
								href={i.href}
								end={true}
								activeClass="underline decoration-zinc-500"
								onClick={() => setIsVisible(false)}>
								{i.displayName}
							</DynamicLink>
						))}
					</div>
				</div>
			</Show>
		</>
	)
}
