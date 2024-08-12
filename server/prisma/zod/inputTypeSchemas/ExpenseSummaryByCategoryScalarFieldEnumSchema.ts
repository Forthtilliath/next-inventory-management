import { z } from 'zod';

export const ExpenseSummaryByCategoryScalarFieldEnumSchema = z.enum(['expenseByCategoryId','expenseSummaryId','category','amount','date']);

export default ExpenseSummaryByCategoryScalarFieldEnumSchema;
