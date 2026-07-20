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
- npm run clean
