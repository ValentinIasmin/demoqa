# Playwright + TypeScript + Cucumber UI Automation Starter

This project provides a clean starting point for BDD-style UI automation using Playwright, TypeScript, and Cucumber.

## Structure

- src/features: Gherkin feature files
- src/steps: Cucumber step definitions
- src/pages: page object models
- src/support: browser lifecycle, config, and hooks

## Quick start

1. Install dependencies:
   npm install
2. Install Playwright browsers:
   npx playwright install chromium
3. Run the smoke suite:
   npm run test:smoke

## Scripts

- npm run typecheck
- npm run test
- npm run test:smoke
- npm run test:allure
- npm run allure:generate
- npm run allure:open
- npm run clean

## Allure reporting

This project now produces Allure results for Cucumber.

- `npm run test:allure` runs typecheck, executes Cucumber, and generates an Allure report.
- `npm run allure:generate` builds the HTML report from `reports/allure-results`.
- `npm run allure:open` opens the generated report in the browser.

Allure results are written to `reports/allure-results` and the generated HTML report is written to `reports/allure-report`.

Tests are organized in Allure by:

- `parentSuite` — `DemoQA Project`
- `suite` — `Homepage Tests`
- `subSuite` — `Smoke`
- `feature` — `Homepage`
