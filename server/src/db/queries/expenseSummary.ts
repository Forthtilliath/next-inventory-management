import prisma from "../prisma";

export async function getLast() {
	return prisma.expenseSummary.findMany({
		take: 5,
		orderBy: {
			date: "desc",
		},
	});
}
