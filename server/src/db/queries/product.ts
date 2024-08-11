import type { Product } from "@prisma/client";
import prisma from "../prisma";

export async function getPopularProducts() {
	return prisma.product.findMany({
		take: 15,
		orderBy: {
			stockQuantity: "desc",
		},
	});
}

export async function findByName(search?: string) {
	return prisma.product.findMany({
		where: {
			name: {
				contains: search,
			},
		},
	});
}

export async function create(data: Product) {
	return prisma.product.create({ data });
}
