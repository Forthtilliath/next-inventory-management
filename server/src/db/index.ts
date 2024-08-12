import * as expensesSummaryByCategory from "./queries/expenseSummaryByCategory";
import * as expensesSummary from "./queries/expenseSummary";
import * as products from "./queries/product";
import * as purchasesSummary from "./queries/purchaseSummary";
import * as salesSummary from "./queries/saleSummary";
import * as users from "./queries/user";

const db = {
	expensesSummaryByCategory,
	expensesSummary,
	products,
	purchasesSummary,
	salesSummary,
	users,
};

export default db;
