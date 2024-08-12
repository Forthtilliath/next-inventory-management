export function sum(arr: number[]) {
	return arr.reduce((a, b) => a + b, 0);
}

export function sumByKey<
	T extends Record<string, unknown>,
	K extends KeysOfType<T, number>,
>(arr: T[], key: K) {
	return arr.reduce((a, b) => a + (b[key] as number), 0);
}

export function avg(arr: number[]) {
	if (arr.length === 0) return 0;
	return sum(arr) / arr.length;
}

export function avgByKey<
	T extends Record<string, unknown>,
	K extends KeysOfType<T, number>,
>(arr: T[], key: K) {
	if (arr.length === 0) return 0;
	return sumByKey(arr, key) / arr.length;
}
