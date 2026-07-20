import { config as dotenvConfig } from 'dotenv';

dotenvConfig();

export const config = {
  baseUrl: process.env.BASE_URL || 'https://example.com',
  headless: process.env.HEADLESS !== 'false',
  slowMo: Number(process.env.SLOW_MO || 0),
};
