import { defineSupportCode } from 'cucumber'
import { remote } from 'webdriverio'
import { webdriverio, cucumber } from '../../config'

const client = remote(webdriverio)

defineSupportCode(function ({setWorldConstructor, setDefaultTimeout}) {
  setWorldConstructor(function () {
    this.browser = client.init()
  })

  setDefaultTimeout(cucumber.defaultTimeout);
})