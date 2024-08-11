import type { Request, Response } from "express";
import db from "../db";

export async function getUsers(_req: Request, res: Response): Promise<void> {
	try {
		const users = await db.users.getAll();
		res.json(users);
	} catch (error) {
		res.status(500).json({ message: "Error retrieving users" });
	}
}
