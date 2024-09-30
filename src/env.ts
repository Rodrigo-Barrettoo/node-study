import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const envSchema = z.object({
  PORT: z.coerce.number().min(1000),
  JWT_SECRET: z.string().min(1),
  DATABASE_URL: z.string().url(),
  NODE_ENV: z
    .union([z.literal("develop"), z.literal("production")])
    .default("develop"),
});

export const env = envSchema.parse(process.env);
