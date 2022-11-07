import type { ContentConfig } from "../../types/types"

export default <ContentConfig>[
	{
		category: "",
		links: [{ displayName: "Index", href: "/wiki/index" }]
	},
	{
		category: "Rules & Administration",
		links: [
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
		links: [
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
