import { z } from 'zod';

export const ExpenseScalarFieldEnumSchema = z.enum(['expenseId','category','amount','timestamp']);

export default ExpenseScalarFieldEnumSchema;
