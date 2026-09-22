import { z } from 'zod';

export const nationSchema = z.object({
  id: z.string(),
  name: z.string(),
  status: z.enum(['planned', 'active', 'archived']),
  capital: z.string().optional(),
  leader: z.string().optional(),
  population: z.number().nonnegative().optional(),
  territory: z.number().nonnegative().optional(),
  emblemUrl: z.string().optional(),
});
