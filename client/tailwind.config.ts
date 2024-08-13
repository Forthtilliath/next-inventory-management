import type { Config } from "tailwindcss";
import { customColors } from "./tailwindExtends/customColors";

const config: Config = {
	darkMode: "class",
	safelist: ["dark"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			gridTemplateRows: {
				"8-30": "repeat(8, 7.5dvh)",
				"8-80": "repeat(8, 20dvh)",
			},
			screens: {
				"xs": "460px",
			}
		},
	},
	plugins: [customColors()],
};
export default config;
