import { JSXElement, splitProps } from "solid-js"
import { JSX } from "solid-js/jsx-runtime"

interface ButtonProps extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
	children?: JSXElement
}

/**
 * Standard button component which extends the functionality of the HTML button.
 *
 * TODO:
 * - Fix the way default classes work.
 */
export default function Button(props: ButtonProps): JSXElement {
	const [local, buttonProps] = splitProps(props, ["children"])

	return (
		<button
			class="bg-[#3b3523] button-background border border-amber-400 text-amber-400 px-10 py-1.5 rounded-md shadow-amber-400/20 hover:shadow-amber-400/50 shadow-md font-semibold duration-150"
			{...buttonProps}>
			{local.children}
		</button>
	)
}
