import assert from 'node:assert/strict';
import { Given, Then } from '@cucumber/cucumber';
import { HomePage } from '../pages/homePage';
import type { CustomWorld } from '../support/world';

Given('the user opens the home page', async function (this: CustomWorld) {
  const homePage = new HomePage(this.page);
  await homePage.open('/');
});

Then('the page title should contain {string}',
  async function (this: CustomWorld, expectedTitle: string) {
    const title = await this.page.title();
    assert.match(title, new RegExp(expectedTitle, 'i'));
  }
);

//TODO:
//FOR PR 
