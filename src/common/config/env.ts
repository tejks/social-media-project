import * as z from 'zod';

const envSchema = z.object({
  VITE_JSONPLACEHOLDER_URL: z.string(),
  VITE_UNSPLASH_URL: z.string(),
});

export const env = envSchema.parse(import.meta.env);
