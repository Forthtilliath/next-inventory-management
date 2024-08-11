import { z } from 'zod';

export const SalesScalarFieldEnumSchema = z.enum(['saleId','productId','timestamp','quantity','unitPrice','totalAmount']);

export default SalesScalarFieldEnumSchema;
