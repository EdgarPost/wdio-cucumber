Feature: Test DuckDuckGo search

  Scenario: Search for something
    Given I am on a site "https://www.duckduckgo.com"
    When I enter a value "MediaMonks" in "#search_form_input_homepage"
    And I click on "#search_button_homepage"
    Then the title should contain "MediaMonks"