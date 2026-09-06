export const ENV = {
  NODE_ENV: process.env.NODE_ENV ?? "development",

  SITE_URL:
    process.env.NEXT_PUBLIC_SITE_URL ??
    "http://localhost:3000",
} as const;
