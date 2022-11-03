import { JSXElement, mergeProps, splitProps } from "solid-js"
import { A, AnchorProps } from "@solidjs/router"
import { Icon } from "solid-heroicons"
import { arrowUpRight } from "solid-heroicons/solid-mini"

interface DynamicLinkProps extends AnchorProps {
	children?: JSXElement
	showExternalIcon?: boolean
}

/**
 * Wrapper for the `@solidjs/router` `A` component and extends all of it's
 * functionality. This component automatically sets the target attribute to
 * blank for external navigation and adds an icon indicating that the link is to
 * an external site.
 *
 * ## Known Issues
 *
 * The `activeClass` class will not be applied for "/" without prior navigation
 * Waiting for merge of https://github.com/solidjs/solid-router/pull/192
 */
export default function DynamicLink(props: DynamicLinkProps): JSXElement {
	props = mergeProps({ showExternalIcon: true }, props)
	const [local, dynamicLinkProps] = splitProps(props, [
		"children",
		"showExternalIcon"
	])
	const isExternal = dynamicLinkProps.href.trim().includes("http")

	return (
		<A
			{...dynamicLinkProps}
			target={isExternal ? "_blank" : dynamicLinkProps.target}
			rel={isExternal ? "noreferrer" : dynamicLinkProps.rel}>
			{local.children}
			{
				// Show the default external link icon if the link is to another site or
				// and the `showExternalIcon` prop is true.
				isExternal && local.showExternalIcon ? (
					<Icon
						path={arrowUpRight}
						class="inline w-4 h-4 self-bottom"
					/>
				) : null
			}
		</A>
	)
}
