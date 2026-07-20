module.exports = {
  default: {
    paths: ['src/features/**/*.feature'],
    require: ['src/steps/*.ts', 'src/support/*.ts'],
    requireModule: ['ts-node/register'],
    format: [
      'allure-cucumberjs/reporter:reports/allure-results',
      'progress-bar',
      'html:reports/cucumber-report.html',
      'json:reports/cucumber-report.json'
    ],
    failFast: false
  }
};
