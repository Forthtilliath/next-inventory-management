import prisma from "../prisma";

export async function getLast() {
	return prisma.saleSummary.findMany({
		take: 5,
		orderBy: {
			date: "desc",
		},
	});
}
