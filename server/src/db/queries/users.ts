import prisma from "../prisma";

export async function getAll() {
	return prisma.users.findMany();
}
