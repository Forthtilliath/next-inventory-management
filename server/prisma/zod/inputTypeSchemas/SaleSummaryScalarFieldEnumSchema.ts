import { z } from 'zod';

export const SaleSummaryScalarFieldEnumSchema = z.enum(['salesSummaryId','totalValue','changePercentage','date']);

export default SaleSummaryScalarFieldEnumSchema;
