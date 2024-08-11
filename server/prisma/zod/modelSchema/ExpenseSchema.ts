import { z } from 'zod';

/////////////////////////////////////////
// EXPENSE SCHEMA
/////////////////////////////////////////

export const ExpenseSchema = z.object({
  expenseId: z.string(),
  category: z.string(),
  amount: z.number(),
  timestamp: z.coerce.date(),
})

export type Expense = z.infer<typeof ExpenseSchema>

export default ExpenseSchema;
