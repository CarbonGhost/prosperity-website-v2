import Button from "../components/Button"
import DynamicLink from "../components/DynamicLink"

/**
 * Home page.
 */
export default function Home() {
	return (
		<>
			{/* Section #1: Headline */}
			<div class="h-[80vh] max-h-[2048px] flex main-background bg-cover 2xl:bg-auto">
				<div class="standard-width flex-col self-center">
					<header class="font-display text-zinc-200 text-6xl font-bold text-center">
						This is Prosperity.
					</header>
					<p class="md:w-5/6 max-w-5xl mx-auto mt-3 mb-10 text-center">
						Prosperity is a survival-multiplayer server focused on
						bringing skilled builders and technical players together
						to make the most out ofv Minecraft. If you're interested
						in large scale building megaprojects, cutting edge
						Redstone, and joining and friendly and collaborate
						community, then this may be the server for you.
					</p>
					<div class="flex justify-center gap-16">
						<Button>Join the Server</Button>
						<DynamicLink
							href="https://youtube.com"
							class="self-center">
							Watch the Trailer
						</DynamicLink>
					</div>
				</div>
			</div>
			{/* Section #2 */}
			<div class="bg-zinc-700 border-zinc-500 drop-shadow-lg -skew-y-2 flex py-20 border-t border-b">
				{/* Grid container */}
				<div class="standard-width gap-y-10 lg:grid lg:grid-cols-2 skew-y-2 space-y-8 antialiased">
					<div>
						<header class="text-zinc-200 font-display mt-4 text-4xl font-bold">
							Expanding the Minds of Engineers.
						</header>
						<p class="mt-2 mb-4">
							Prosperity aims to expand the minds of Redstone
							engineers by carefully utilizing server-side mods
							like Carpet to open up new possibilities. If you
							want to learn or collaborate we have something for
							you. We run a second creative server with additional
							Carpet features for benchmarking and testing farms
							and Redstone. Filled with skilled Redstone engineers
							already, this server has been the birthplace for
							several new advances in item tech and more.
						</p>
						<header class="text-zinc-200 font-display border-amber-400 pl-4 text-xl font-bold border-l">
							Tech Without Compromises.
						</header>
						<p class="mt-2">
							Prosperity aims to expand the minds of Redstone
							engineers by carefully utilizing server-side mods
							like Carpet to open up new possibilities. If you
							want to learn or collaborate we have something for
							you. We run a second creative server with additional
							Carpet features for benchmarking and testing farms
							and Redstone. Filled with skilled Redstone engineers
							already, this server has been the birthplace for
							several new advances in item tech and more.
						</p>
					</div>
					<div />
					<div />
					<div>
						<header class="text-zinc-200 font-display lg:mt-0 text-4xl font-bold">
							An Architect's Playground.
						</header>
						<p class="mt-2 mb-4">
							If you're interested in building then this is the
							place to be. With more farmable items and a
							technical community you can expand your ambitions of
							scale and the blocks you use.If you want to jump in
							and work on something then we have no shortage of
							in-progress projects which we would love for you to
							contribute to. Namely these are our server museum
							project, cyberpunk city project, and spawn build.
						</p>
						<header class="text-zinc-200 font-display border-amber-400 pl-4 text-xl font-bold border-l">
							Collaboration Made Easy.
						</header>
						<p class="mt-2">
							For collaboration we run a creative server with
							WorldEdit where you can work on and show off your
							build concepts. Lorem ipsum dolor sit amet,
							consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua. Ut enim
							ad minim veniam, quis nostrud exercitation ullamco
							laboris nisi ut aliquip ex ea commodo consequat.
						</p>
					</div>
				</div>
			</div>
			{/* Section #3 */}
			<div class="tech-background my-32">
				<div class="standard-width">
					<div class="text-amber-400 button-background border-amber-400 shadow-amber-400/20 lg:w-2/3 lg:max-w-3xl px-10 py-10 mx-auto border rounded-md shadow-lg">
						<header class="font-display text-xl font-bold">
							BossDaily said say...
						</header>
						<p class="mt-6 mb-2 italic">
							Before I joined Prosperity my life was a mess. I got
							fired from work, my wife left with the kids, and I
							had just lost $12,000 of my parents money on
							speculative ape jpegs. After I joined the server,
							none of that changed, but the server is pretty cool.
						</p>
						<div class="flex justify-end gap-4">
							<div class="flex-col align-middle">
								<header class="font-display text-lg font-bold text-right">
									BossDaily
								</header>
								<sub class="text-right align-text-top">
									The Greatest Prosperity Member
								</sub>
							</div>
							<div class="bg-amber-400 shrink-0 self-center w-10 h-10 rounded-full" />
						</div>
					</div>
				</div>
			</div>
			{/* Section #4 */}
			<div class="standard-width">
				<header class="font-display text-zinc-200 text-5xl font-bold text-center">
					Built for the Community.
				</header>
				<p class="w-5/6 max-w-5xl mx-auto mt-3 mb-10 text-center">
					The importance of a community to a server can't be
					understated. Prosperity has a welcoming and talented
					community of people from all walks of life. While the server
					isn't the largest, you can expect people who are willing to
					collaborate and ensure you get a great experience on the
					server.
				</p>
				<div class="gap-x-10 lg:grid lg:grid-cols-2 lg:space-y-0 space-y-8">
					<div>
						<header class="text-zinc-200 font-display border-amber-400 pl-4 text-xl font-bold border-l">
							A Server for Everyone.
						</header>
						<p class="mt-2">
							The importance of a community to a server can't be
							understated. Prosperity has a welcoming and talented
							community of people from all walks of life. While
							the server isn't the largest, you can expect people
							who are willing to collaborate and ensure you get a
							great experience on the server. Lorem ipsum dolor
							sit amet, consectetur adipiscing elit, sed do
							eiusmod.
						</p>
					</div>
					<div>
						<header class="text-zinc-200 font-display border-amber-400 pl-4 text-xl font-bold border-l">
							Accountable Administration.
						</header>
						<p class="mt-2">
							In-addition to a good community, good administration
							goes hand-in-hand. Admins and moderators should
							serve and engage with the community without creating
							an environment that's suffocatingly strict or allows
							toxicity to take root. We understand that this is a
							place where you will potentially invest hundreds to
							thousands of hours and take pains to be transparent
							and ensure suggestions are taken seriously.
						</p>
					</div>
				</div>
			</div>
			{/* Watermark */}
			<div class="flex justify-center gap-4 my-20">
				<div class="bg-zinc-500 shrink-0 self-center w-10 h-10 rounded" />
				<header class="font-display text-zinc-500 self-center font-bold">
					Prosperity MC
				</header>
			</div>
		</>
	)
}
