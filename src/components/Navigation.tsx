import Button from "./button"
import DynamicLink from "./DynamicLink"

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
	const links: { display: string; href: string }[] = [
		{ display: "Home", href: "/" },
		{ display: "Projects", href: "/projects" },
		{ display: "Wiki", href: "/wiki" },
		{ display: "Map", href: "https://map.prosperitymc.net" },
		{ display: "Donate", href: "https://ko-fi.com" },
	]

	return (
		<div class="flex py-8 self-center fixed top-0 left-0 right-0 bg-zinc-800/30 backdrop-blur-md">
			<div class="standard-width flex self-center">
				<div class="w-8 h-8 bg-amber-400 shrink-0 rounded-md" />
				<span class="justify-center w-full flex gap-14 self-center font-semibold">
					{links.map((i) => (
						<DynamicLink
							class="text-zinc-200"
							href={i.href}
							activeClass="text-zinc-50">
							{i.display}
						</DynamicLink>
					))}
				</span>
				<Button>Join</Button>
			</div>
		</div>
	)
}
