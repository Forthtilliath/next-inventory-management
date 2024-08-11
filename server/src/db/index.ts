import * as expenseByCategory from "./queries/expenseByCategory";
import * as expenseSummary from "./queries/expenseSummary";
import * as products from "./queries/product";
import * as purchaseSummary from "./queries/purchaseSummary";
import * as salesSummary from "./queries/saleSummary";
import * as users from "./queries/user";

const db = {
	expenseByCategory,
	expenseSummary,
	products,
	purchaseSummary,
	salesSummary,
	users,
};

export default db;
