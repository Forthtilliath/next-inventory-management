import { z } from 'zod';

/////////////////////////////////////////
// EXPENSE BY CATEGORY SCHEMA
/////////////////////////////////////////

export const ExpenseByCategorySchema = z.object({
  expenseByCategoryId: z.string(),
  expenseSummaryId: z.string(),
  category: z.string(),
  amount: z.number().int(),
  date: z.coerce.date(),
})

export type ExpenseByCategory = z.infer<typeof ExpenseByCategorySchema>

export default ExpenseByCategorySchema;
