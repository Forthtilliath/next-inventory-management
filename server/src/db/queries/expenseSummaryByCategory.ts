import prisma from "../prisma";

export async function getLast() {
	return prisma.expenseSummaryByCategory.findMany({
		take: 5,
		orderBy: {
			date: "desc",
		},
	});
}

export async function getAll() {
	return prisma.expenseSummaryByCategory.findMany({
		orderBy: {
			date: "desc",
		},
	});
}
