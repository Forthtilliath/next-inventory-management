import * as expenseByCategory from "./queries/expenseByCategory";
import * as expenseSummary from "./queries/expenseSummary";
import * as products from "./queries/products";
import * as purchaseSummary from "./queries/purchaseSummary";
import * as salesSummary from "./queries/salesSummary";
import * as users from "./queries/users";

const db = {
	expenseByCategory,
	expenseSummary,
	products,
	purchaseSummary,
	salesSummary,
	users,
};

export default db;
