import type { Products } from "@prisma/client";
import prisma from "../prisma";

export async function getPopularProducts() {
	return prisma.products.findMany({
		take: 15,
		orderBy: {
			stockQuantity: "desc",
		},
	});
}

export async function findByName(search?: string) {
	return prisma.products.findMany({
		where: {
			name: {
				contains: search,
			},
		},
	});
}

export async function create(data: Products) {
	return prisma.products.create({ data });
}
