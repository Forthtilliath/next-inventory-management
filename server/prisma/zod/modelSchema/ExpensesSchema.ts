import { z } from 'zod';

/////////////////////////////////////////
// EXPENSES SCHEMA
/////////////////////////////////////////

export const ExpensesSchema = z.object({
  expenseId: z.string(),
  category: z.string(),
  amount: z.number(),
  timestamp: z.coerce.date(),
})

export type Expenses = z.infer<typeof ExpensesSchema>

export default ExpensesSchema;
