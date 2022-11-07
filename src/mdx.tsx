import { JSX } from "solid-js/jsx-runtime"
import { AnchorProps } from "@solidjs/router"

import DynamicLink from "./components/DynamicLink"
import Button from "./components/Button"

type propsFrom<T> = JSX.IntrinsicAttributes & JSX.HTMLAttributes<T>

/**
 * An object representing mappings between MDX components and JSX. Details:
 * https://mdxjs.com/docs/using-mdx/#components
 */
export default {
	Button,
	wrapper: ({ ...rest }) => <article class="space-y-3" {...rest} />,
	h1: (props: propsFrom<HTMLElement>) => (
		<header
			class="text-zinc-200 align-baseline space-y-2 text-5xl font-bold"
			{...props}
		/>
	),
	h2: (props: propsFrom<HTMLElement>) => (
		<header
			class="text-zinc-200 align-baseline space-y-2 text-3xl font-bold"
			{...props}
		/>
	),
	h3: (props: propsFrom<HTMLElement>) => (
		<header
			class="text-zinc-200 align-baseline space-y-2 text-2xl font-bold"
			{...props}
		/>
	),
	h4: (props: propsFrom<HTMLElement>) => (
		<header
			class="text-zinc-200 align-baseline space-y-2 text-xl font-bold"
			{...props}
		/>
	),
	h5: (props: propsFrom<HTMLElement>) => (
		<header
			class="text-zinc-200 align-baseline space-y-2 text-lg font-bold"
			{...props}
		/>
	),
	h6: (props: propsFrom<HTMLElement>) => (
		<header
			class="text-zinc-200 align-baseline space-y-2 text-sm font-bold"
			{...props}
		/>
	),
	a: (props: JSX.IntrinsicAttributes & AnchorProps) => (
		<DynamicLink {...props} />
	),
	table: (props: propsFrom<HTMLTableElement>) => (
		// Unfortuentnly can't inline all the classes here... to change go to
		// `index.css`.
		<div class="border-zinc-500 border rounded-md">
			<table class="md-table w-full" {...props} />
		</div>
	),
	pre: (props: propsFrom<HTMLPreElement>) => (
		<pre
			class="bg-zinc-700 border-zinc-500 px-2 py-1 border rounded-md shadow-md"
			{...props}
		/>
	),
	hr: (props: propsFrom<HTMLHRElement>) => (
		<hr class="border-zinc-500 border-dashed" {...props} />
	),
	ul: (props: propsFrom<HTMLUListElement>) => (
		<ul class="list-disc list-inside" role="list" {...props} />
	),
	ol: (props: propsFrom<HTMLOListElement>) => (
		<ol class="list-decimal list-inside" role="list" {...props} />
	)
}
