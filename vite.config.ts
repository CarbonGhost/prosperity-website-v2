import { defineConfig } from "vite"
import solidPlugin from "vite-plugin-solid"

export default defineConfig({
	plugins: [solidPlugin()],
	server: {
		port: 7200
	},
	build: {
		target: "esnext"
	}
})
