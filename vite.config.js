import { defineConfig } from "vite"
import mdx from "@mdx-js/rollup"
import solid from "vite-plugin-solid"
import remarkGfm from "remark-gfm"

export default defineConfig({
	plugins: [
		mdx({ jsxImportSource: "solid-jsx", remarkPlugins: [remarkGfm] }),
		solid()
	],
	server: {
		port: 7200,
		strictPort: true,
		hmr: {
			clientPort: 7200
		}
	},
	build: {
		target: "esnext"
	}
})
