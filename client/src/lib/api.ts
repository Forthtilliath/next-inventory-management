import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
	ExpenseSummaryByCategory,
	ExpenseSummary,
	Product,
	PurchaseSummary,
	SaleSummary,
	User,
} from "./schemas";

export type DashboardMetrics = {
	popularProducts: Product[];
	salesSummary: SaleSummary[];
	purchasesSummary: PurchaseSummary[];
	expensesSummary: ExpenseSummary[];
	expensesSummaryByCategory: ExpenseSummaryByCategory[];
};

export const api = createApi({
	baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
	reducerPath: "api",
	tagTypes: ["DashboardMetrics", "Products", "Users", "Expenses"],
	endpoints: (build) => ({
		getDashboardMetrics: build.query<DashboardMetrics, void>({
			query: () => "/dashboard",
			providesTags: ["DashboardMetrics"],
		}),
		// biome-ignore lint/suspicious/noConfusingVoidType: this is how optional params work on rtk query
		getProducts: build.query<Product[], string | void>({
			query: (search = "") => ({
				url: "/products",
				params: { search },
			}),
			providesTags: ["Products"],
		}),
		createProduct: build.mutation<Product, Omit<Product, "productId">>({
			query: (newProduct) => ({
				url: "/products",
				method: "POST",
				body: newProduct,
			}),
			invalidatesTags: ["Products"],
		}),
		getUsers: build.query<User[], void>({
			query: () => "/users",
			providesTags: ["Users"],
		}),
		getExpensesByCategory: build.query<ExpenseSummaryByCategory[], void>({
			query: () => "/expenses",
			providesTags: ["Expenses"],
		}),
	}),
});

export const {
	useGetDashboardMetricsQuery,
	useGetProductsQuery,
	useCreateProductMutation,
	useGetUsersQuery,
	useGetExpensesByCategoryQuery,
} = api;
