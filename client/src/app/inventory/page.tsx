"use client";

import { useGetProductsQuery } from "@/lib/api";
import { Header } from "@/app/_components/Header";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
	{ field: "productId", headerName: "ID", width: 90, maxWidth: 300 },
	{ field: "name", headerName: "Name", flex: 1, maxWidth: 300 },
	{
		field: "price",
		headerName: "Price",
		width: 110,
		maxWidth: 200,
		type: "number",
		valueGetter: (_, row) => `$${row.price}`,
	},
	{
		field: "rating",
		headerName: "Rating",
		width: 110,
		maxWidth: 110,
		type: "number",
		valueGetter: (_, row) => row?.rating ?? "N/A",
	},
	{
		field: "stockQuantity",
		headerName: "Stock",
		width: 110,
		maxWidth: 150,
		type: "number",
	},
];

export default function InventoryPage() {
	const { data: products, isLoading, isError } = useGetProductsQuery();

	if (isLoading) {
		return <div className="py-4">Loading...</div>;
	}

	if (isError || !products) {
		return (
			<div className="py-4 text-center text-red-500">
				Failed to fetch products
			</div>
		);
	}

	return (
		<div className="flex flex-col">
			<Header>Inventory</Header>
			<DataGrid
				rows={products}
				columns={columns}
				getRowId={(row) => row.productId}
				checkboxSelection
				className="bg-white shadow rounded-lg border border-gray-200 mt-5 !text-gray-700"
			/>
		</div>
	);
}
