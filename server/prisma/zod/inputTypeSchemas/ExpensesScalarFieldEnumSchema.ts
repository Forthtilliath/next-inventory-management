import { z } from 'zod';

export const ExpensesScalarFieldEnumSchema = z.enum(['expenseId','category','amount','timestamp']);

export default ExpensesScalarFieldEnumSchema;
