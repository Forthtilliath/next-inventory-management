import type React from "react";
import {
	type ChangeEvent,
	type FormEvent,
	type LabelHTMLAttributes,
	useState,
} from "react";
import { Header } from "@/app/_components/Header";
import { OutsideClickHandler } from "./OutsideClickHandler";

type ProductFormData = {
	name: string;
	price: number;
	stockQuantity: number;
	rating: number;
};

type Props = {
	isOpen: boolean;
	onClose: () => void;
	onCreate: (formData: ProductFormData) => void;
};

export function CreateProductModal({ isOpen, onClose, onCreate }: Props) {
	const [formData, setFormData] = useState({
		productId: crypto.randomUUID(),
		name: "",
		price: 0,
		stockQuantity: 0,
		rating: 0,
	});

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]:
				name === "price" || name === "stockQuantity" || name === "rating"
					? Number.parseFloat(value)
					: value,
		});
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("formData", formData);
		console.log("e", e);
		onCreate(formData);
		onClose();
	};

	if (!isOpen) return null;

	const inputCssStyles =
		"block w-full mb-2 p-2 border-gray-500 border-2 rounded-md";

	return (
		<div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-30">
			<OutsideClickHandler
				onOutsideClick={onClose}
				className="grid content-center w-full h-full"
			>
				<div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
					<Header>Create New Product</Header>
					<form onSubmit={handleSubmit} className="mt-5">
						{/* PRODUCT NAME */}
						<Label htmlFor="productName">Product Name</Label>
						<input
							type="text"
							name="name"
							placeholder="Name"
							onChange={handleChange}
							value={formData.name}
							className={inputCssStyles}
							required
						/>

						{/* PRICE */}
						<Label htmlFor="productPrice">Price</Label>
						<input
							type="number"
							name="price"
							placeholder="Price"
							onChange={handleChange}
							value={formData.price}
							className={inputCssStyles}
							required
						/>

						{/* STOCK QUANTITY */}
						<Label htmlFor="stockQuantity">Stock Quantity</Label>
						<input
							type="number"
							name="stockQuantity"
							placeholder="Stock Quantity"
							onChange={handleChange}
							value={formData.stockQuantity}
							className={inputCssStyles}
							required
						/>

						{/* RATING */}
						<Label htmlFor="rating">Rating</Label>
						<input
							type="number"
							name="rating"
							placeholder="Rating"
							onChange={handleChange}
							value={formData.rating}
							className={inputCssStyles}
							required
						/>

						{/* CREATE ACTIONS */}
						<button
							type="submit"
							className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
						>
							Create
						</button>
						<button
							onClick={onClose}
							type="button"
							className="ml-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-700"
						>
							Cancel
						</button>
					</form>
				</div>
			</OutsideClickHandler>
		</div>
	);
}

function Label({
	children,
	...props
}: WithChildren<LabelHTMLAttributes<HTMLLabelElement>>) {
	return (
		<label {...props} className="block text-sm font-medium text-gray-700">
			{children}
		</label>
	);
}
