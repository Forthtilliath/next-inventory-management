import colors from "tailwindcss/colors";
import type { DefaultColors } from "tailwindcss/types/generated/colors";
import { createThemes } from "tw-colors";
import type { PluginCreator } from "./types";

type Color = Exclude<
	keyof DefaultColors,
	"inherit" | "transparent" | "current" | "black" | "white"
>;
const baseColors = [
	"gray",
	"red",
	"yellow",
	"green",
	"blue",
	"indigo",
	"purple",
	"pink",
] satisfies Color[];

const shadeMapping = [
	"50",
	"100",
	"200",
	"300",
	"400",
	"500",
	"600",
	"700",
	"800",
	"900",
	"950",
] as const satisfies `${number}`[];

type ShadeMapping = (typeof shadeMapping)[number];

export function customColors(): PluginCreator {
	const lightTheme = generateThemeObject(colors, shadeMapping);
	const darkTheme = generateThemeObject(colors, shadeMapping, true);

	const themes = {
		light: {
			...lightTheme,
			white: colors.white,
		},
		dark: {
			...darkTheme,
			white: colors.gray[950],
			black: colors.gray[50],
		},
	};

	return () => createThemes(themes);
}

function generateThemeObject(colors: DefaultColors, mapping: ShadeMapping[], invert = false) {
	const theme: Partial<Record<(typeof baseColors)[number], Record<string, string>>> = {};

	for (const color of baseColors) {
		theme[color] = {};
		for (const key of mapping) {
			const shade = getStringShade(key, invert);
			theme[color][key] = colors[color][shade];
		}
	}

	return theme;
}

function getStringShade(shade: ShadeMapping, invert: boolean): ShadeMapping {
	if (invert) {
		return shade;
	}
	const inverted = (1000 - Number(shade)).toString();
	assertsIsValidShade(inverted);

	return inverted;
}

function assertsIsValidShade(shade: string): asserts shade is ShadeMapping {
	// @ts-expect-error checks that the shade is valid
	if (!shadeMapping.includes(shade)) {
		throw new Error(`Invalid shade: ${shade}`);
	}
}
