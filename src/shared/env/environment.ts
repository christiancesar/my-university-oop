import { z } from "zod";
import fs from "node:fs";
import path from "node:path";
const __dirname = import.meta.dirname;

const dotEnvSchema = z.object({
  URL: z.string(),
  URL_BASE: z.string(),
  PORT: z.string(),
  JWT_SECRET: z.string(),
  JWT_EXPIRES_IN: z.string(),
  DATABASE_URL: z.string().transform((val) => {
    return path.resolve(__dirname, "..", "..", "..", "university.db");
  }),
});

type EnvironmentKeys = z.infer<typeof dotEnvSchema>;

export class Environment {
  private static instance: EnvironmentKeys | null = null;

  public static getInstance(): EnvironmentKeys {
    if (!Environment.instance) {
      Environment.instance = dotEnvSchema.parse(process.env);

      console.log("Environment variables loaded.");
    }
    return Environment.instance;
  }
}
