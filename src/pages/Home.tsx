import { JSXElement } from "solid-js"

import Button from "../components/Button"
import DynamicLink from "../components/DynamicLink"

export default function Home(): JSXElement {
	return (
		<>
			<Headline />
			<div class="mb-24 space-y-24">
				<Section1 />
				<Section2 />
				<Testimonial />
			</div>
		</>
	)
}

function Headline(): JSXElement {
	return (
		<>
			{/* Use `h-80vh` and `max-h-[2048px]' to prevent the headline from being 
			at strange aspect ratios at large screen sizes. Use `bg-cover` and 
			`2xl:bg-auto` to prevent background clipping. */}
			<section class="h-[80vh] max-h-[2048px] flex isometric-grid-background bg-cover 2xl:bg-auto">
				{/* Another container because the parent one has the background and
				cannot use the `standard-width` class. */}
				<div class="standard-width flex-col self-center">
					<header class="font-display text-zinc-200 text-5xl sm:text-6xl font-bold text-center">
						This is Prosperity.
					</header>
					<p class="md:w-5/6 max-w-5xl mx-auto mt-3 mb-10 text-center">
						Prosperity is a survival-multiplayer server focused on
						bringing skilled builders and technical players together
						to make the most out of Minecraft. If you're interested
						in large scale building megaprojects, cutting edge
						Redstone, and joining and friendly and collaborate
						community, then this may be the server for you.
					</p>
					<section class="flex justify-center gap-16">
						<Button>Join the Server</Button>
						<DynamicLink
							href="https://youtube.com"
							class="self-center">
							Watch the Trailer
						</DynamicLink>
					</section>
				</div>
			</section>
		</>
	)
}

function Section1(): JSXElement {
	return (
		<>
			<section class="bg-zinc-700 border-zinc-500 drop-shadow-lg -skew-y-2 flex py-24 origin-bottom-left border-t border-b">
				{/* Uses `skew-y-2` to revert the skew of the parent element. May cause
				rending issues? */}
				<div class="standard-width lg:grid lg:grid-cols-2 skew-y-2 space-y-8">
					<SubSection
						header={<>Expanding the Minds of Engineers.</>}
						content={
							<>
								Prosperity aims to expand the minds of Redstone
								engineers by carefully utilizing server-side
								mods like Carpet to open up new possibilities.
								If you want to learn or collaborate we have
								something for you. We run a second creative
								server with additional Carpet features for
								benchmarking and testing farms and Redstone.
								Filled with skilled Redstone engineers already,
								this server has been the birthplace for several
								new advances in item tech and more.
							</>
						}
						subHeader={<>Tech Without Compromises.</>}
						subHeaderContent={
							<>
								Prosperity aims to expand the minds of Redstone
								engineers by carefully utilizing server-side
								mods like Carpet to open up new possibilities.
								If you want to learn or collaborate we have
								something for you. We run a second creative
								server with additional Carpet features for
								benchmarking and testing farms and Redstone.
								Filled with skilled Redstone engineers already,
								this server has been the birthplace for several
								new advances in item tech and more.
							</>
						}
					/>
					<div /> {/* Spacing... */}
					<div /> {/* Spacing... */}
					<SubSection
						header={<>An Architect's Playground.</>}
						content={
							<>
								If you're interested in building then this is
								the place to be. With more farmable items and a
								technical community you can expand your
								ambitions of scale and the blocks you use.If you
								want to jump in and work on something then we
								have no shortage of in-progress projects which
								we would love for you to contribute to. Namely
								these are our server museum project, cyberpunk
								city project, and spawn build.
							</>
						}
						subHeader={<>Collaboration Made Easy.</>}
						subHeaderContent={
							<>
								For collaboration we run a creative server with
								WorldEdit where you can work on and show off
								your build concepts. Lorem ipsum dolor sit amet,
								consectetur adipiscing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna
								aliqua. Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex
								ea commodo consequat.
							</>
						}
					/>
				</div>
			</section>
		</>
	)
}

function Section2(): JSXElement {
	return (
		<div class="standard-width">
			<header class="font-display text-zinc-200 text-5xl font-bold text-center">
				Built for the Community.
			</header>
			<p class="w-5/6 max-w-5xl mx-auto mt-3 mb-10 text-center">
				The importance of a community to a server can't be understated.
				Prosperity has a welcoming and talented community of people from
				all walks of life. While the server isn't the largest, you can
				expect people who are willing to collaborate and ensure you get
				a great experience on the server.
			</p>
			<div class="gap-x-10 lg:grid lg:grid-cols-2 lg:space-y-0 space-y-8">
				<SubSection
					subHeader={<>A Server for Everyone.</>}
					subHeaderContent={
						<>
							The importance of a community to a server can't be
							understated. Prosperity has a welcoming and talented
							community of people from all walks of life. While
							the server isn't the largest, you can expect people
							who are willing to collaborate and ensure you get a
							great experience on the server. Lorem ipsum dolor
							sit amet, consectetur adipiscing elit, sed do
							eiusmod.
						</>
					}
				/>
				<SubSection
					subHeader={<>Accountable Administration.</>}
					subHeaderContent={
						<>
							In-addition to a good community, good administration
							goes hand-in-hand. Admins and moderators should
							serve and engage with the community without creating
							an environment that's suffocatingly strict or allows
							toxicity to take root. We understand that this is a
							place where you will potentially invest hundreds to
							thousands of hours and take pains to be transparent
							and ensure suggestions are taken seriously.
						</>
					}
				/>
			</div>
		</div>
	)
}

function Testimonial(): JSXElement {
	return (
		<>
			{/* Section #3 */}
			<div class="tech-background">
				<section class="standard-width">
					<div class="text-amber-400 button-background border-amber-400 shadow-amber-400/20 lg:w-2/3 lg:max-w-3xl px-10 py-10 mx-auto border rounded-md shadow-lg">
						<header class="font-display text-xl font-bold">
							BossDaily said say...
						</header>
						<p class="mt-6 mb-2">
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
				</section>
			</div>
		</>
	)
}

function SubSection(props: {
	header?: JSXElement
	content?: JSXElement
	subHeader?: JSXElement
	subHeaderContent?: JSXElement
}) {
	return (
		<section>
			<header class="text-zinc-200 font-display mt-4 text-4xl font-bold">
				{props.header}
			</header>
			<p class="mt-2 mb-4">{props.content}</p>
			<header class="text-zinc-200 font-display border-amber-400 pl-4 text-xl font-bold border-l">
				{props.subHeader}
			</header>
			<p class="mt-2">{props.subHeaderContent}</p>
		</section>
	)
}
