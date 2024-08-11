import prisma from "../prisma";

export async function getLast() {
	return prisma.expenseByCategory.findMany({
		take: 5,
		orderBy: {
			date: "desc",
		},
	});
}

export async function getAll() {
	return prisma.expenseByCategory.findMany({
		orderBy: {
			date: "desc",
		},
	});
}
