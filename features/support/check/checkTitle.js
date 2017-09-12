import assert from 'assert'

/**
 *
 * @param string
 */
export default function checkTitle (string) {
  return this.browser.getTitle().then(title =>
    assert.ok(title.includes(string)));
}