import { JSXElement, mergeProps, splitProps } from "solid-js"
import { A, AnchorProps } from "@solidjs/router"
import { Icon } from "solid-heroicons"
import { arrowUpRight } from "solid-heroicons/solid-mini"

/**
 * Wrapper for the `@solidjs/router` `A` component and extends all of it's
 * functionality. This component automatically sets the target attribute to
 * blank for external navigation and adds an icon indicating that the link is to
 * an external site.
 *
 * TODO:
 * - Fix `activeClass` not working for some reason.
 */
export default function DynamicLink(props: DynamicLinkProps) {
	props = mergeProps({ externalIcon: true }, props)
	const [local, dynamicLinkProps] = splitProps(props, [
		"children",
		"externalIcon"
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
				// and the `externalIcon` prop is true.
				isExternal && local.externalIcon ? (
					<Icon
						path={arrowUpRight}
						class="inline w-4 h-4 self-bottom"
					/>
				) : null
			}
		</A>
	)
}

/**
 * Extend the `@solidjs/router` `A` component props.
 */
interface DynamicLinkProps extends AnchorProps {
	children?: JSXElement
	externalIcon?: boolean
}
