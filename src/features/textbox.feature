@textbox @allure.label.parentSuite:DemoQA_Project @allure.label.suite:TextBox_Tests @allure.label.feature:TextBox_Form
Feature: Text Box Form Testing
  As a user
  I want to fill and submit the text box form
  So that I can verify the form submission works correctly

  @smoke @allure.label.subSuite:Smoke
  Scenario: Successfully fill and submit the text box form
    Given I navigate to the text box page
    When I fill the full name field with "John Doe"
    And I fill the email field with "john.doe@example.com"
    And I fill the current address field with "123 Main Street, Springfield"
    And I fill the permanent address field with "456 Oak Avenue, Metropolis"
    And I click the submit button
    Then the form submission should be successful

  @smoke @allure.label.subSuite:Smoke
  Scenario: Verify form with valid email
    Given I navigate to the text box page
    When I fill the full name field with "Jane Smith"
    And I fill the email field with "jane.smith@test.com"
    And I fill the current address field with "789 Pine Road, Shelbyville"
    And I fill the permanent address field with "321 Elm Street, Capital City"
    And I click the submit button
    Then the form submission should be successful

  @smoke @allure.label.subSuite:Smoke
  Scenario: Fill form with empty fields
    Given I navigate to the text box page
    When I click the submit button
    Then the form submission should be successful

  @smoke @allure.label.subSuite:Smoke
  Scenario: Fill only required field
    Given I navigate to the text box page
    When I fill the full name field with "Alice Johnson"
    And I click the submit button
    Then the form submission should be successful
