import { Before, After } from '@cucumber/cucumber';
import * as allure from 'allure-js-commons';
import { CustomWorld } from './world';

Before(async function (this: CustomWorld) {
  await this.launchBrowser();

  await allure.parentSuite('DemoQA Project');
  await allure.suite('Homepage Tests');
  await allure.subSuite('Smoke');
  await allure.feature('Homepage');
});

After(async function (this: CustomWorld) {
  await this.closeBrowser();
});
