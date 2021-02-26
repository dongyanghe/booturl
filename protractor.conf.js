/*global jasmine */
const { SpecReporter } = require('jasmine-spec-reporter');
const Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
  allScriptsTimeout: 15000,
  specs: [
    './test/**/*.spec.ts'
  ],
  multiCapabilities: [
    // {
    //   browserName: 'firefox'
    // },
     {
      browserName: 'chrome',
      // 'chromeOptions': {
      //         'args': ['incognito', 'disable-extensions', 'start-maximized']
      //     }
    }
  ],
  directConnect: true,
  baseUrl: 'http://127.0.0.1:8090/',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 15000,
    print: function() {}
  },
  beforeLaunch: function() {
    require('ts-node').register({
      project: 'test'
    });
  },
  onPrepare() {
    console.log("test-------------------------------onPrepare");
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
    jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
      savePath: 'test/reporter/img/',
      takeScreenshots: true,  //  是否截屏
      takeScreenshotsOnlyOnFailures: true //  测试用例执行失败时才截屏
    }));
  }
};
