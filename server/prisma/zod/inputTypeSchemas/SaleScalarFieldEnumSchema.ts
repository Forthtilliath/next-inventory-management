import { z } from 'zod';

export const SaleScalarFieldEnumSchema = z.enum(['saleId','productId','timestamp','quantity','unitPrice','totalAmount']);

export default SaleScalarFieldEnumSchema;
