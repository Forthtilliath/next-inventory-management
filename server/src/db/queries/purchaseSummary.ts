import prisma from "../prisma";

export async function getLast() {
	return prisma.purchaseSummary.findMany({
		take: 5,
		orderBy: {
			date: "desc",
		},
	});
}
