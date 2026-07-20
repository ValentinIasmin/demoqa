import { setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber';
import type { Browser, BrowserContext, Page } from 'playwright';
import { chromium } from 'playwright';
import { config } from './config';

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;

  constructor(options: IWorldOptions) {
    super(options);
  }

  async launchBrowser(): Promise<void> {
    this.browser = await chromium.launch({ headless: config.headless });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
  }

  async closeBrowser(): Promise<void> {
    await this.context?.close();
    await this.browser?.close();
  }
}

setWorldConstructor(CustomWorld);
