const formatterNumberToShort = new Intl.NumberFormat("en-US", {
	notation: "compact",
	compactDisplay: "short",
});

export function formatNumberToShort(number: number) {
	return formatterNumberToShort.format(number);
}
