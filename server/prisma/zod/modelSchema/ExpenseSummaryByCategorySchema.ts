import { z } from 'zod';

/////////////////////////////////////////
// EXPENSE SUMMARY BY CATEGORY SCHEMA
/////////////////////////////////////////

export const ExpenseSummaryByCategorySchema = z.object({
  expenseByCategoryId: z.string(),
  expenseSummaryId: z.string(),
  category: z.string(),
  amount: z.number().int(),
  date: z.coerce.date(),
})

export type ExpenseSummaryByCategory = z.infer<typeof ExpenseSummaryByCategorySchema>

export default ExpenseSummaryByCategorySchema;
