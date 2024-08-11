import type { Request, Response } from "express";
import db from "../db";

export async function getDashboardMetrics(
	_req: Request,
	res: Response,
): Promise<void> {
	try {
		const [
			popularProducts,
			salesSummary,
			purchaseSummary,
			expenseSummary,
			expenseByCategorySummaryRaw,
		] = await Promise.all([
			db.products.getPopularProducts(),
			db.salesSummary.getLast(),
			db.purchaseSummary.getLast(),
			db.expenseSummary.getLast(),
			db.expenseByCategory.getLast(),
		]);

		const expenseByCategorySummary = expenseByCategorySummaryRaw.map(
			(item) => ({
				...item,
				amount: item.amount.toString(),
			}),
		);

		res.json({
			popularProducts,
			salesSummary,
			purchaseSummary,
			expenseSummary,
			expenseByCategorySummary,
		});
	} catch (error) {
		res.status(500).json({ message: "Error retrieving dashboard metrics" });
	}
}
