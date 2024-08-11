import { PrismaClient } from "@prisma/client";
import fs from "node:fs";
import path from "node:path";
import type { PrismaModel } from "./prisma.js";
import {
	ExpenseByCategorySchema,
	ExpensesSchema,
	ExpenseSummarySchema,
	ProductsSchema,
	PurchasesSchema,
	PurchaseSummarySchema,
	SalesSchema,
	SalesSummarySchema,
	UsersSchema,
} from "./zod";
import z from "zod";

const prisma = new PrismaClient();

const schemas = {
	products: z.array(ProductsSchema),
	expenseSummary: z.array(ExpenseSummarySchema),
	sales: z.array(SalesSchema),
	salesSummary: z.array(SalesSummarySchema),
	purchases: z.array(PurchasesSchema),
	purchaseSummary: z.array(PurchaseSummarySchema),
	users: z.array(UsersSchema),
	expenses: z.array(ExpensesSchema),
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
		"products.json",
		"expenseSummary.json",
		"sales.json",
		"salesSummary.json",
		"purchases.json",
		"purchaseSummary.json",
		"users.json",
		"expenses.json",
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
