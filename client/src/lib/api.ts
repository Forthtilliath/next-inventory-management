import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
	ExpenseByCategory,
	ExpenseSummary,
	Product,
	PurchaseSummary,
	SaleSummary,
} from "./schemas";

export type DashboardMetrics = {
	popularProducts: Product[];
	salesSummary: SaleSummary[];
	purchaseSummary: PurchaseSummary[];
	expenseSummary: ExpenseSummary[];
	expenseByCategory: ExpenseByCategory[];
};

export const api = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
	reducerPath: "api",
	tagTypes: ["DashboardMetrics"],
	endpoints: (builder) => ({
		getDashboardMetrics: builder.query<DashboardMetrics, void>({
			query: () => "/dashboard",
			providesTags: ["DashboardMetrics"],
		}),
	}),
});

export const { useGetDashboardMetricsQuery } = api;
