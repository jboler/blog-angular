// Testacular configuration

// base path, that will be used to resolve files and exclude
basePath = '../';

// list of files / patterns to load in the browser
files = [
  JASMINE,
  JASMINE_ADAPTER,
  'app/components/angular/angular.js',
  'app/components/angular-cookies/angular-cookies.js',
  'app/components/angular-resource/angular-resource.js',
  'app/components/angular-sanitize/angular-sanitize.js',
  'app/components/angular-mocks/angular-mocks.js',
  'app/components/angular-ui/build/angular-ui.js',
  'app/scripts/**/*.js',
  'test/spec/**/*.js'
];

// list of files to exclude
exclude = [];

// test results reporter to use
// possible values: dots || progress
reporter = 'progress';

// web server port
port = 8080;

// cli runner port
runnerPort = 9100;

// enable / disable colors in the output (reporters and logs)
colors = true;

// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;

// enable / disable watching file and executing tests whenever any file changes
autoWatch = true;

browsers = ['Chrome'];

// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = false;

junitReporter = {
  outputFile: 'test_out/unit.xml',
  suite: 'unit'
};