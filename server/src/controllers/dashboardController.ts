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
			purchasesSummary,
			expensesSummary,
			expensesSummaryByCategory,
		] = await Promise.all([
			db.products.getPopularProducts(),
			db.salesSummary.getLast(),
			db.purchasesSummary.getLast(),
			db.expensesSummary.getAll(),
			db.expensesSummaryByCategory.getLast(),
		]);

		res.json({
			popularProducts,
			salesSummary,
			purchasesSummary,
			expensesSummary,
			expensesSummaryByCategory,
		});
	} catch (error) {
		res.status(500).json({ message: "Error retrieving dashboard metrics" });
	}
}
