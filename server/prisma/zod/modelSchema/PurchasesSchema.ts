import { z } from 'zod';

/////////////////////////////////////////
// PURCHASES SCHEMA
/////////////////////////////////////////

export const PurchasesSchema = z.object({
  purchaseId: z.string(),
  productId: z.string(),
  timestamp: z.coerce.date(),
  quantity: z.number().int(),
  unitCost: z.number(),
  totalCost: z.number(),
})

export type Purchases = z.infer<typeof PurchasesSchema>

export default PurchasesSchema;
