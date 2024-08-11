import { PrismaClient } from "@prisma/client";
import fs from "node:fs";
import path from "node:path";

const prisma = new PrismaClient();

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
		const model: any = prisma[modelName as keyof typeof prisma];

		if (!model) {
			console.error(`No Prisma model matches the file name: ${fileName}`);
			continue;
		}

		for (const data of jsonData) {
			await model.create({ data });
		}

		console.log(`Seeded ${modelName} with data from ${fileName}`);
	}
}

main()
	.catch((e) => {
		console.error(e);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
