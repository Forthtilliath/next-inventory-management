/**
 *
 * @param arr
 * @param key
 * @returns
 *
 */
const a = 0;

/**
 * Groups an array of objects by a specified key and sums the values of another specified key.
 *
 * @param {T[]} arr - The array of objects to group and sum.
 * @param {K} groupKey - The key to group the objects by.
 * @param {KeysOfType<T, number>} sumKey - The key to sum the values of.
 * @return {{ [group: string]: number }} An object with the grouped keys and their corresponding sums.
 * @example
 * groupByAndSum([
 * 	{ category: "Groceries", amount: 100, createdAt: "2020-01-01" },
 * 	{ category: "Groceries", amount: 200, createdAt: "2020-01-02" },
 * 	{ category: "Groceries", amount: 300, createdAt: "2020-01-03" },
 * 	{ category: "Other", amount: 400, createdAt: "2020-01-01" },
 ], "category", "amount")
 * // { "Groceries": 600, "Other": 400 }
 */
export function groupByAndSum<
	T extends Record<string, unknown>,
	K extends keyof T,
>(
	arr: T[],
	groupKey: K,
	sumKey: KeysOfType<T, number>,
): { [group: string]: number } {
	const group: {
		[group: string]: number;
	} = {};
	for (const item of arr) {
		const groupName = item[groupKey] as string;
		if (!group[groupName]) {
			group[groupName] = 0;
		}
		group[groupName] += item[sumKey] as number;
	}
	return group;
}
