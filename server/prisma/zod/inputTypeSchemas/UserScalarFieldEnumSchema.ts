import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['userId','name','email']);

export default UserScalarFieldEnumSchema;
