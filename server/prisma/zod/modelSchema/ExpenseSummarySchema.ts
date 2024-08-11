import { z } from 'zod';

/////////////////////////////////////////
// EXPENSE SUMMARY SCHEMA
/////////////////////////////////////////

export const ExpenseSummarySchema = z.object({
  expenseSummaryId: z.string(),
  totalExpenses: z.number(),
  date: z.coerce.date(),
})

export type ExpenseSummary = z.infer<typeof ExpenseSummarySchema>

export default ExpenseSummarySchema;
