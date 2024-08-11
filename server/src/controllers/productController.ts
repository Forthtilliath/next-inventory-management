import type { Request, Response } from "express";
import db from "../db";

export async function getProducts(req: Request, res: Response): Promise<void> {
	try {
		const search = req.query.search?.toString();
		const products = await db.products.findByName(search);
		res.json(products);
	} catch (error) {
		res.status(500).json({ message: "Error retrieving products" });
	}
}

export async function createProduct(
	req: Request,
	res: Response,
): Promise<void> {
	try {
		const { productId, name, price, rating, stockQuantity } = req.body;
		// TODO Zod
		const product = await db.products.create({
			productId,
			name,
			price,
			rating,
			stockQuantity,
		});
		res.status(201).json(product);
	} catch (error) {
		res.status(500).json({ message: "Error creating product" });
	}
}
