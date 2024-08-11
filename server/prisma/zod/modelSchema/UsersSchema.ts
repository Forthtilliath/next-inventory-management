import { z } from 'zod';

/////////////////////////////////////////
// USERS SCHEMA
/////////////////////////////////////////

export const UsersSchema = z.object({
  userId: z.string(),
  name: z.string(),
  email: z.string(),
})

export type Users = z.infer<typeof UsersSchema>

export default UsersSchema;
