import { z } from 'zod';

export const ExpenseByCategoryScalarFieldEnumSchema = z.enum(['expenseByCategoryId','expenseSummaryId','category','amount','date']);

export default ExpenseByCategoryScalarFieldEnumSchema;
