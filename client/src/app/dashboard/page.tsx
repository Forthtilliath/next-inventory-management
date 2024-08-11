"use client";

import CardPopularProducts from "./_components/CardPopularProducts";

export default function Dashboard() {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 md:grid-rows-8-30 xl:grid-rows-8-80">
			<CardPopularProducts />
			{/* <div className="row-span-3 xl:row-span-6 bg-gray-500" /> */}
			<div className="row-span-3 xl:row-span-6 bg-gray-500" />
			<div className="row-span-2 xl:row-span-3 bg-gray-500 col-span-1 md:max-xl:col-span-2" />
			<div className="row-span-3 bg-gray-500" />
			<div className="row-span-1 xl:row-span-2 bg-gray-500" />
			<div className="row-span-1 xl:row-span-2 bg-gray-500" />
			<div className="row-span-1 xl:row-span-2 bg-gray-500" />
		</div>
	);
}
