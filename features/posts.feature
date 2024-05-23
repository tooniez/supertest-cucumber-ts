Feature: Manage Posts on JSONPlaceholder API

    Scenario: Retrieve a list of posts
        Given I am a user
        When I send a GET request to /posts
        Then the API should respond with status code 200
        And the response should contain an array of posts

    Scenario: Create a new post
        Given I am a user
        When I send a POST request to /posts
        Then the API should respond with status code 201
        And the response should contain the post object

    Scenario: Retrieve a specific post
        Given I am a user
        When I send a GET request to /posts/1
        Then the API should respond with status code 200
        And the response should contain the details of the post
