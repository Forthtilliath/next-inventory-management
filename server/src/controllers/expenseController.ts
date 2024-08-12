import type { Request, Response } from "express";
import db from "../db";

export async function getExpensesSummaryByCategory(
	_req: Request,
	res: Response,
): Promise<void> {
	try {
		const expenseSummaryByCategoryRaw =
			await db.expensesSummaryByCategory.getAll();
		const expenseSummaryByCategory = expenseSummaryByCategoryRaw.map(
			(item) => ({
				...item,
				amount: item.amount.toString(),
			}),
		);

		res.json(expenseSummaryByCategory);
	} catch (error) {
		res.status(500).json({ message: "Error retrieving expenses by category" });
	}
}
