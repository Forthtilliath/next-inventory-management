import { z } from 'zod';

export const PurchaseScalarFieldEnumSchema = z.enum(['purchaseId','productId','timestamp','quantity','unitCost','totalCost']);

export default PurchaseScalarFieldEnumSchema;
