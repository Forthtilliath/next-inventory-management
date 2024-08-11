import { z } from 'zod';

/////////////////////////////////////////
// PURCHASE SUMMARY SCHEMA
/////////////////////////////////////////

export const PurchaseSummarySchema = z.object({
  purchaseSummaryId: z.string(),
  totalPurchased: z.number(),
  changePercentage: z.number().nullable(),
  date: z.coerce.date(),
})

export type PurchaseSummary = z.infer<typeof PurchaseSummarySchema>

export default PurchaseSummarySchema;
