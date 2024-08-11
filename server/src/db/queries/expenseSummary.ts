import prisma from "../prisma";

export async function getLast() {
	return prisma.expenseByCategory.findMany({
		take: 5,
		orderBy: {
			date: "desc",
		},
	});
}
