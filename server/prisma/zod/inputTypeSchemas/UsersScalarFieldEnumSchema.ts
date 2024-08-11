import { z } from 'zod';

export const UsersScalarFieldEnumSchema = z.enum(['userId','name','email']);

export default UsersScalarFieldEnumSchema;
