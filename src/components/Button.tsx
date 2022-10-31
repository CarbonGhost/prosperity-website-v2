import { JSXElement, splitProps } from "solid-js"
import { JSX } from "solid-js/jsx-runtime"

/**
 * Standard button component which extends the functionality of the HTML button.
 *
 * TODO:
 * - Fix props.
 */
export default function Button(props: ButtonProps) {
	const [local, buttonProps] = splitProps(props, ["children"])

	return (
		<button
			{...buttonProps}
			class="bg-zinc-800 border-2 border-amber-400 text-amber-400 px-10 py-1.5 rounded-md shadow-amber-400/20 shadow-md font-semibold">
			{local.children}
		</button>
	)
}

/**
 * Extend the HTML `button` props.
 */
interface ButtonProps extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
	children?: JSXElement
}
