import type { Page } from 'playwright';
import { config } from '../support/config';

export class HomePage {
  constructor(private readonly page: Page) {}

  async open(path = '/'): Promise<void> {
    await this.page.goto(`${config.baseUrl}${path}`, { waitUntil: 'domcontentloaded' });
  }

  async getTitle(): Promise<string> {
    return this.page.title();
  }
}
