import { PrismaClient } from "@prisma/client";
import fs from "node:fs";
import path from "node:path";
import type { PrismaModel } from "./prisma.js";
import {
	ExpenseByCategorySchema,
	ExpenseSchema,
	ExpenseSummarySchema,
	ProductSchema,
	PurchaseSchema,
	PurchaseSummarySchema,
	SaleSchema,
	SaleSummarySchema,
	UserSchema,
} from "./zod";
import z from "zod";

const prisma = new PrismaClient();

console.log("Seeding...");

const schemas = {
	product: z.array(ProductSchema),
	expenseSummary: z.array(ExpenseSummarySchema),
	sale: z.array(SaleSchema),
	saleSummary: z.array(SaleSummarySchema),
	purchase: z.array(PurchaseSchema),
	purchaseSummary: z.array(PurchaseSummarySchema),
	user: z.array(UserSchema),
	expense: z.array(ExpenseSchema),
	expenseByCategory: z.array(ExpenseByCategorySchema),
} as const;

export async function seedData<Model extends PrismaModel>(
	prisma: PrismaClient,
	modelName: Model,
	data: unknown,
) {
	const parsed = schemas[modelName].safeParse(data);

	if (!parsed.success) {
		console.error(parsed.error);
		process.exit(1);
	}

	// @ts-ignore modelName is a PrismaModel & data has the right type
	return prisma[modelName].createMany({ data: parsed.data });
}

async function main() {
	const dataDirectory = path.join(__dirname, "seedData");

	const orderedFileNames = [
		"product.json",
		"expenseSummary.json",
		"sale.json",
		"saleSummary.json",
		"purchase.json",
		"purchaseSummary.json",
		"user.json",
		"expense.json",
		"expenseByCategory.json",
	];

	for (const fileName of orderedFileNames) {
		const filePath = path.join(dataDirectory, fileName);
		const jsonData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

		const modelName = path.basename(fileName, path.extname(fileName));
		assertsIsPrismaModelName(modelName);

		await seedData(prisma, modelName, jsonData);

		console.log(`Seeded ${modelName} with data from ${fileName}`);
	}
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});

function assertsIsPrismaModelName(
	modelName: string,
): asserts modelName is PrismaModel {
	if (!Reflect.has(prisma, modelName)) {
		throw new Error(`No Prisma model matches the file name: ${modelName}`);
	}
}
