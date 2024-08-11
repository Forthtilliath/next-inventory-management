import prisma from "../prisma";

export async function getLast() {
	return prisma.salesSummary.findMany({
		take: 5,
		orderBy: {
			date: "desc",
		},
	});
}
