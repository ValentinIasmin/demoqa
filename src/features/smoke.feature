@smoke
Feature: Basic homepage smoke test

  Scenario: Open the homepage successfully
    Given the user opens the home page
    Then the page title should contain "Example Domain"
