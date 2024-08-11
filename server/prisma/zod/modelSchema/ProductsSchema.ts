import { z } from 'zod';

/////////////////////////////////////////
// PRODUCTS SCHEMA
/////////////////////////////////////////

export const ProductsSchema = z.object({
  productId: z.string(),
  name: z.string(),
  price: z.number(),
  rating: z.number().nullable(),
  stockQuantity: z.number().int(),
})

export type Products = z.infer<typeof ProductsSchema>

export default ProductsSchema;
