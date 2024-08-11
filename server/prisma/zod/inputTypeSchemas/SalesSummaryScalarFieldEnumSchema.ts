import { z } from 'zod';

export const SalesSummaryScalarFieldEnumSchema = z.enum(['salesSummaryId','totalValue','changePercentage','date']);

export default SalesSummaryScalarFieldEnumSchema;
