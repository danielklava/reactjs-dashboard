Feature: Manage articles
    In order to manage articles
    As a user
    I want to acess the page
    And perform update on data

    Scenario: Listing articles
        Given a list
        When I visit the home page
        Then show list of articles

    Scenario: Creating a new article
        Given I visit the home page
        When I article with title ipsum and content Dolor sit amet
        Then the number of existent products should be increased by one
        And I should be sent to the home page