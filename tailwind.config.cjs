/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		fontFamily: {
			sans: ["Archivo", "ui-sans-serif", "system-ui"],
			display: ["Inter", "ui-sans-serif", "system-ui"],
			mono: ["JetBrains Mono", "ui-monospace", "monosapce"]
		},
		colors: {
			amber: {
				400: "#fec11b"
			},
			zinc: {
				200: "#c4c5c6",
				300: "#a2a2a2",
				500: "#5a5d63",
				700: "#2a2c2e",
				800: "#232426"
			}
		},
		extend: {}
	},
	plugins: []
}
