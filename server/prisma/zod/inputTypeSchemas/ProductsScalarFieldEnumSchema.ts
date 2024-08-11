import { z } from 'zod';

export const ProductsScalarFieldEnumSchema = z.enum(['productId','name','price','rating','stockQuantity']);

export default ProductsScalarFieldEnumSchema;
