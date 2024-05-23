const reporter = require('cucumber-html-reporter')

const options = {
 // themes : either (bootstrap, heirarchy, foundation, simple)
 theme: 'bootstrap',
 jsonFile: 'cucumber_report.json',
 output: 'cucumber_report.html',
 reportSuiteScenarios: true,
 launchReport: false,
}

reporter.generate(options)
