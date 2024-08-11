import { z } from 'zod';

/////////////////////////////////////////
// SALES SCHEMA
/////////////////////////////////////////

export const SalesSchema = z.object({
  saleId: z.string(),
  productId: z.string(),
  timestamp: z.coerce.date(),
  quantity: z.number().int(),
  unitPrice: z.number(),
  totalAmount: z.number(),
})

export type Sales = z.infer<typeof SalesSchema>

export default SalesSchema;
