import prisma from "../prisma";

export async function getLast() {
	return prisma.expenseSummary.findMany({
		take: 5,
		orderBy: {
			date: "desc",
		},
	});
}

export async function getAll() {
	return prisma.expenseSummary.findMany();
}
