"use client";

import {
	CheckCircle,
	Package,
	Tag,
	TrendingDown,
	TrendingUp,
} from "lucide-react";
import { CardExpensesSummary } from "./_components/CardExpensesSummary";
import CardPopularProducts from "./_components/CardPopularProducts";
import { CardPurchasesSummary } from "./_components/CardPurchasesSummary";
import { CardSalesSummary } from "./_components/CardSalesSummary";
import { StatCard } from "./_components/StatCard";

export default function Dashboard() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 md:grid-rows-8-80 xl:grid-rows-8-30">
			<CardPopularProducts />
			<CardSalesSummary />
			<CardPurchasesSummary />
			<CardExpensesSummary />
			<StatCard
				title="Customer & Expenses"
				primaryIcon={<Package className="text-blue-600 w-6 h-6" />}
				dateRange="22 - 29 October 2023"
				details={[
					{
						title: "Customer Growth",
						amount: 175,
						changePercentage: 131,
						IconComponent: TrendingUp,
					},
					{
						title: "Expenses",
						amount: 10,
						changePercentage: -56,
						IconComponent: TrendingDown,
					},
				]}
			/>
			<StatCard
				title="Dues & Pending Orders"
				primaryIcon={<CheckCircle className="text-blue-600 w-6 h-6" />}
				dateRange="22 - 29 October 2023"
				details={[
					{
						title: "Dues",
						amount: 250,
						changePercentage: 131,
						IconComponent: TrendingUp,
					},
					{
						title: "Pending Orders",
						amount: 147,
						changePercentage: -56,
						IconComponent: TrendingDown,
					},
				]}
			/>
			<StatCard
				title="Sales & Discount"
				primaryIcon={<Tag className="text-blue-600 w-6 h-6" />}
				dateRange="22 - 29 October 2023"
				details={[
					{
						title: "Sales",
						amount: 1000,
						changePercentage: 20,
						IconComponent: TrendingUp,
					},
					{
						title: "Discount",
						amount: 200,
						changePercentage: -10,
						IconComponent: TrendingDown,
					},
				]}
			/>
		</div>
	);
}
