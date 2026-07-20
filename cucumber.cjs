module.exports = {
  default: {
    paths: ['src/features/**/*.feature'],
    require: ['src/steps/*.ts', 'src/support/*.ts'],
    requireModule: ['ts-node/register'],
    format: [
      'allure-cucumberjs/reporter',
      'progress-bar',
      'html:reports/cucumber-report.html',
      'json:reports/cucumber-report.json'
    ],
    formatOptions: {
      resultsDir: 'reports/allure-results'
    },
    failFast: false
  }
};
