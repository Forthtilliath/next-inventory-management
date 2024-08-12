import { Router } from "express";
import { getExpensesSummaryByCategory } from "../controllers/expenseController";

const router = Router();

router.get("/", getExpensesSummaryByCategory);

export default router;
