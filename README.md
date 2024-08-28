# SuperTest Cucumber API Testing Boilerplate 🚀🔬

A ready-to-use boilerplate for API testing using SuperTest and Cucumber with TypeScript.

## Features

- SuperTest for making HTTP requests and assertions
- Cucumber for behavior-driven development (BDD) testing
- TypeScript for type-safe code
- Jest as the test runner
- HTML report generation for test results

## Project Structure

- `features/`: Contains Cucumber feature files
- `features/support/`: Contains step definitions and support files for Cucumber
- `specs/`: Contains SuperTest specification files
- `report.js`: Script to generate HTML reports

## Configuration Files

- `jest.config.js`: Jest configuration
- `cucumber.js`: Cucumber configuration (if needed)
- `tsconfig.json`: TypeScript configuration

## Project Setup

🔧 Run the following command to install all the project dependencies:

```shell
npm install
```
## Running Tests

### Run All Tests

To run both SuperTest and Cucumber tests:

```shell
npm run test
```

### Run SuperTest POC Tests

To run the SuperTest proof-of-concept tests:


```shell
npm run test:supertest
```

### Run Cucumber E2E Tests

To execute the end-to-end tests using Cucumber:

```shell
npm run test:cucumber
```

### Generate HTML Report

After running the Cucumber tests, generate an HTML report:

```shell
npm run generate:report
```

##  License

📝 Copyright © 2023 [tooniez](https://github.com/tooniez). <br />
This project is [MIT](https://github.com/tooniez/vuejs-typescript-cypress/blob/main/LICENSE) licensed.











