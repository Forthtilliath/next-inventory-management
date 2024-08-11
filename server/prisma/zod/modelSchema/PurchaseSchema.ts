import { z } from 'zod';

/////////////////////////////////////////
// PURCHASE SCHEMA
/////////////////////////////////////////

export const PurchaseSchema = z.object({
  purchaseId: z.string(),
  productId: z.string(),
  timestamp: z.coerce.date(),
  quantity: z.number().int(),
  unitCost: z.number(),
  totalCost: z.number(),
})

export type Purchase = z.infer<typeof PurchaseSchema>

export default PurchaseSchema;
