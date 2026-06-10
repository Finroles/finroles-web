import { z } from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string().url('DATABASE_URL must be a valid URL'),
  RESEND_API_KEY: z.string().min(1, 'RESEND_API_KEY must not be empty'),
  RESEND_FROM_EMAIL: z.string().email('RESEND_FROM_EMAIL must be a valid email'),
  ADMIN_SECRET: z.string().min(1, 'ADMIN_SECRET must not be empty'),
  TO_EMAIL: z.string().email('TO_EMAIL must be a valid email'),
});

const parseEnv = () => {
  const isBuildPhase =
    process.env.NEXT_PHASE === 'phase-production-build' ||
    !!process.env.CI ||
    !!process.env.VERCEL;

  const result = envSchema.safeParse({
    DATABASE_URL: process.env.DATABASE_URL || (isBuildPhase ? 'postgres://localhost/placeholder' : undefined),
    RESEND_API_KEY: process.env.RESEND_API_KEY || (isBuildPhase ? 'placeholder' : undefined),
    RESEND_FROM_EMAIL: process.env.RESEND_FROM_EMAIL || (isBuildPhase ? 'placeholder@example.com' : undefined),
    ADMIN_SECRET: process.env.ADMIN_SECRET || (isBuildPhase ? 'placeholder' : undefined),
    TO_EMAIL: process.env.TO_EMAIL || (isBuildPhase ? 'placeholder@example.com' : undefined),
  });

  if (!result.success) {
    const errorDetails = JSON.stringify(result.error.format(), null, 2);
    console.error('❌ Invalid environment variables:\n', errorDetails);
    if (isBuildPhase) {
      return {
        DATABASE_URL: 'postgres://localhost/placeholder',
        RESEND_API_KEY: 'placeholder',
        RESEND_FROM_EMAIL: 'placeholder@example.com',
        ADMIN_SECRET: 'placeholder',
        TO_EMAIL: 'placeholder@example.com',
      };
    }
    throw new Error(`Invalid environment variables: ${errorDetails}`);
  }

  return result.data;
};

export const env = parseEnv();
