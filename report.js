const reporter = require('cucumber-html-reporter');
const fs = require('fs');
const path = require('path');

const resultsDir = path.join(__dirname, 'results');

// Ensure the results directory exists
if (!fs.existsSync(resultsDir)) {
    fs.mkdirSync(resultsDir, { recursive: true });
}

const options = {
    theme: 'bootstrap',
    jsonFile: path.join(resultsDir, 'cucumber_report.json'),
    output: path.join(resultsDir, 'cucumber_report.html'),
    reportSuiteScenarios: true,
    launchReport: false,
};

reporter.generate(options);
