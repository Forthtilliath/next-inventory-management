import { z } from 'zod';

/////////////////////////////////////////
// SALE SUMMARY SCHEMA
/////////////////////////////////////////

export const SaleSummarySchema = z.object({
  salesSummaryId: z.string(),
  totalValue: z.number(),
  changePercentage: z.number().nullable(),
  date: z.coerce.date(),
})

export type SaleSummary = z.infer<typeof SaleSummarySchema>

export default SaleSummarySchema;
