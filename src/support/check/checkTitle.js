import assert from 'assert'

/**
 *
 * @param string
 */
export default string => assert.ok(browser.getTitle().includes(string));