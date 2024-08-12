export function sum(arr: number[]) {
	return arr.reduce((a, b) => a + b, 0);
}

export function sumByKey<
	T extends Record<string, unknown>,
	K extends KeysOfType<T, number>,
>(arr: T[], key: K) {
	return arr.reduce((a, b) => a + (b[key] as number), 0);
}
