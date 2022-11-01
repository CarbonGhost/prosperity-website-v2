import Button from "../components/button"
import DynamicLink from "../components/DynamicLink"

/**
 * Home page.
 */
export default function Home() {
	return (
		<>
			<div class="flex h-[52rem] standard-width">
				<div class="h-96 md:w-2/3 lg:w-1/2 flex-col self-center">
					<header class="text-6xl font-bold font-display text-zinc-200 mb-4">
						This is Prosperity.
					</header>
					<p class="mb-10">
						Prosperity is a survival-multiplayer server focused on
						bringing skilled builders and technical players together
						to make the most out of Minecraft. At the core of
						Prosperity is the classic SMP experience, we don't have
						any unnecessary hub worlds, shop plugins, MMO mechanics,
						pay-to-win, or claims, and never will.
					</p>
					<div class="flex gap-12">
						<Button>Join The Server</Button>
						<DynamicLink
							href="https://youtube.com"
							class="self-center">
							Watch The Trailer
						</DynamicLink>
					</div>
				</div>
			</div>
			<div class="py-12 bg-zinc-700 border-t border-b border-zinc-500 w-full m-0 p-0">
				<div class="standard-width">
					<header class="text-3xl font-bold font-display text-zinc-200 mb-4 text-center">
						Expanding The Minds Of Engineers.
					</header>
					<p class="lg:w-3/4 text-center mx-auto">
						Prosperity aims to expand the minds of Redstone
						engineers by carefully utilizing server-side mods like
						Carpet to open up new possibilities. If you want to
						learn or collaborate we have something for you. We run a
						second creative server with additional Carpet features
						for benchmarking and testing farms and Redstone. Filled
						with skilled Redstone engineers already, this server has
						been the birthplace for several new advances in item
						tech and more.
					</p>
					<br />
					<header class="text-3xl font-bold font-display text-zinc-200 mb-4 text-center">
						An Architect's Playground.
					</header>
					<p class="lg:w-3/4 text-center mx-auto">
						If you're interested in building then this is the place
						to be. With more farmable items and a technical
						community you can expand your ambitions of scale and the
						blocks you use. you want to jump in and work on
						something then we have no shortage of in-progress
						projects which we would love for you to contribute to.
						Namely these are our server museum project, cyberpunk
						city project, and spawn build. collaboration we run a
						creative server with WorldEdit where you can work on and
						show off your build concepts.
					</p>
					<br />
					<header class="text-3xl font-bold font-display text-zinc-200 mb-4 text-center">
						Community Focused.
					</header>
					<p class="lg:w-3/4 text-center mx-auto">
						The importance of a community to a server can't be
						understated. Prosperity has a welcoming and talented
						community of people from all walks of life. While the
						server isn't the largest, you can expect people who are
						willing to collaborate and ensure you get a great
						experience on the server. In-addition to a good
						community, good administration goes hand-in-hand. Admins
						and moderators should serve and engage with the
						community without creating an environment that's
						suffocatingly strict or allows toxicity to take root. We
						understand that this is a place where you will
						potentially invest hundreds to thousands of hours and
						take pains to be transparent and ensure suggestions are
						taken seriously.
					</p>
				</div>
			</div>
			<div class="standard-width py-12">
				<div class="md:grid md:grid-cols-2 gap-12">
					<div>
						<header class="text-3xl font-bold font-display text-zinc-200 mb-4">
							Fast and Reliable.
						</header>
						<p>
							Key to both technical gameplay and general quality
							of life, we take performance and reliability very
							seriously. Prosperity is run on high-end dedicated
							hardware using trusted hosting providers. The
							survival server is able to comfortably run gold
							farms, raid farms, and multiple word eaters without
							dropping below the critical 20 TPS mark. Prosperity
							is also highly reliable with near-24 / 7 uptime and
							a scheduled weekly restart. We also utilize verbose
							logging and full server backups. Ensuring that, if
							world corruption or griefing should occur, your
							progress is safe.
						</p>
					</div>
					<div />
				</div>
			</div>
		</>
	)
}
