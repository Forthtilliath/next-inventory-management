import { z } from 'zod';

export const ProductScalarFieldEnumSchema = z.enum(['productId','name','price','rating','stockQuantity']);

export default ProductScalarFieldEnumSchema;
