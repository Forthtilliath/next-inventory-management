"use client";

import { useCreateProductMutation, useGetProductsQuery } from "@/lib/api";
import { PlusCircleIcon, SearchIcon } from "lucide-react";
import { useState } from "react";
import { Header } from "@/app/_components/Header";
import { CreateProductModal } from "@/app/products/_components/CreateProductModal";
import { GridProducts } from "./_components/GridProducts";

type ProductFormData = {
	name: string;
	price: number;
	stockQuantity: number;
	rating: number;
};

export default function ProductsPage() {
	const [searchTerm, setSearchTerm] = useState("");
	const [isModalOpen, setIsModalOpen] = useState(false);

	const {
		data: products,
		isLoading,
		isError,
	} = useGetProductsQuery(searchTerm);
	const [createProduct] = useCreateProductMutation();

	const handleCreateProduct = async (productData: ProductFormData) => {
		await createProduct(productData);
	};

	if (isLoading) {
		return <div className="py-4">Loading...</div>;
	}

	if (isError || !products) {
		return (
			<div className="text-center text-red-500 py-4">
				Failed to fetch products
			</div>
		);
	}

	return (
		<div className="mx-auto pb-5 w-full">
			{/* SEARCH BAR */}
			<div className="mb-6">
				<div className="flex items-center border-2 border-gray-200 rounded">
					<SearchIcon className="w-5 h-5 text-gray-500 m-2" />
					<input
						className="w-full py-2 px-4 rounded bg-white"
						placeholder="Search products..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
				</div>
			</div>

			{/* HEADER BAR */}
			<div className="flex justify-between items-center mb-6">
				<Header>Products</Header>
				<button
					className="flex items-center bg-blue-500 hover:bg-blue-700 text-gray-200 font-bold py-2 px-4 rounded"
					onClick={() => setIsModalOpen(true)}
					type="button"
				>
					<PlusCircleIcon className="size-5 mr-2 !text-gray-200" /> Create
					Product
				</button>
			</div>

			{/* BODY PRODUCTS LIST */}
			{isLoading ? <div>Loading...</div> : <GridProducts products={products} />}

			{/* MODAL */}
			<CreateProductModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				onCreate={handleCreateProduct}
			/>
		</div>
	);
}
