import { z } from 'zod';

/////////////////////////////////////////
// SALE SCHEMA
/////////////////////////////////////////

export const SaleSchema = z.object({
  saleId: z.string(),
  productId: z.string(),
  timestamp: z.coerce.date(),
  quantity: z.number().int(),
  unitPrice: z.number(),
  totalAmount: z.number(),
})

export type Sale = z.infer<typeof SaleSchema>

export default SaleSchema;
