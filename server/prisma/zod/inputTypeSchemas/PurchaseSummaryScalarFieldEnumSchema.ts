import { z } from 'zod';

export const PurchaseSummaryScalarFieldEnumSchema = z.enum(['purchaseSummaryId','totalPurchased','changePercentage','date']);

export default PurchaseSummaryScalarFieldEnumSchema;
