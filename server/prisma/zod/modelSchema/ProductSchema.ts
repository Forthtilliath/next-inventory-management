import { z } from 'zod';

/////////////////////////////////////////
// PRODUCT SCHEMA
/////////////////////////////////////////

export const ProductSchema = z.object({
  productId: z.string(),
  name: z.string(),
  price: z.number(),
  rating: z.number().nullable(),
  stockQuantity: z.number().int(),
})

export type Product = z.infer<typeof ProductSchema>

export default ProductSchema;
