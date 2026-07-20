@smoke @allure.label.parentSuite:DemoQA_Project @allure.label.suite:Homepage_Tests @allure.label.subSuite:Smoke @allure.label.feature:Homepage
Feature: Basic homepage smoke test

  Scenario: Open the homepage successfully
    Given the user opens the home page
    Then the page title should contain "Example Domain"
