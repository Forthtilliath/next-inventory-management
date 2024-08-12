import type { Request, Response } from "express";
import db from "../db";

export async function getExpensesSummaryByCategory(
	_req: Request,
	res: Response,
): Promise<void> {
	try {
		const expenseSummaryByCategory =
			await db.expensesSummaryByCategory.getAll();

		res.json(expenseSummaryByCategory);
	} catch (error) {
		res.status(500).json({ message: "Error retrieving expenses by category" });
	}
}
