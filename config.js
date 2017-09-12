const baseUrl = 'https://www.duckduckgo.com'

module.exports = {
  // http://webdriver.io/guide/getstarted/configuration.html
  webdriverio: {
    // See the Selenium documentation for a list of the available capabilities:
    // https://github.com/SeleniumHQ/selenium/wiki/DesiredCapabilities
    desiredCapabilities: {
      browserName: 'chrome',
    },
    // verbose | silent | command | data | result
    logLevel: 'silent',
    baseUrl: baseUrl,
    screenshotPath: './var/screenshots',
    screenshotOnReject: true,
  },
  cucumber: {
    defaultTimeout: 5000,
  }
}