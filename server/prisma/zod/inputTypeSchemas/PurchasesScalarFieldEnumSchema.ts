import { z } from 'zod';

export const PurchasesScalarFieldEnumSchema = z.enum(['purchaseId','productId','timestamp','quantity','unitCost','totalCost']);

export default PurchasesScalarFieldEnumSchema;
