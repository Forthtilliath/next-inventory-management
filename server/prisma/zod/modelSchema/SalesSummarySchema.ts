import { z } from 'zod';

/////////////////////////////////////////
// SALES SUMMARY SCHEMA
/////////////////////////////////////////

export const SalesSummarySchema = z.object({
  salesSummaryId: z.string(),
  totalValue: z.number(),
  changePercentage: z.number().nullable(),
  date: z.coerce.date(),
})

export type SalesSummary = z.infer<typeof SalesSummarySchema>

export default SalesSummarySchema;
