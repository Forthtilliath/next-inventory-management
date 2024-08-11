import { z } from 'zod';

/////////////////////////////////////////
// USER SCHEMA
/////////////////////////////////////////

export const UserSchema = z.object({
  userId: z.string(),
  name: z.string(),
  email: z.string(),
})

export type User = z.infer<typeof UserSchema>

export default UserSchema;
