import { z } from 'zod';

export const ExpenseSummaryScalarFieldEnumSchema = z.enum(['expenseSummaryId','totalExpenses','date']);

export default ExpenseSummaryScalarFieldEnumSchema;
