"use client";

import { CardExpensesSummary } from "./_components/CardExpensesSummary";
import CardPopularProducts from "./_components/CardPopularProducts";
import { CardPurchasesSummary } from "./_components/CardPurchasesSummary";
import { CardSalesSummary } from "./_components/CardSalesSummary";

export default function Dashboard() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 md:grid-rows-8-80 xl:grid-rows-8-30">
			<CardPopularProducts />
			<CardSalesSummary />
			<CardPurchasesSummary />
			<CardExpensesSummary />
			<div className="row-span-1 xl:row-span-2 bg-gray-500" />
			<div className="row-span-1 xl:row-span-2 bg-gray-500" />
			<div className="row-span-1 xl:row-span-2 bg-gray-500" />
		</div>
	);
}
