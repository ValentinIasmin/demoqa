// Initialize the Allure CucumberJS runtime before tests start.
// This is required because cucumber-js loads formatters (like allure-cucumberjs/reporter)
// separately from the support code. We must import the main allure-cucumberjs package here
// so that its BeforeAll hook executes and registers the global test runtime via setGlobalTestRuntime().
// Without this, calls to allure.* in the steps will fall through to NoopTestRuntime and print warnings.
import "allure-cucumberjs";
