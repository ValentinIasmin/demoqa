import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src',
  timeout: 30_000,
  retries: 1,
  fullyParallel: false,
  use: {
    baseURL: process.env.BASE_URL || 'https://example.com',
    headless: process.env.HEADLESS !== 'false',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
  reporter: [
    ['list'],
    ['html', { outputFolder: 'reports/playwright-html', open: 'never' }]
  ]
});
