import prisma from "../prisma";

export async function getAll() {
	return prisma.user.findMany();
}
