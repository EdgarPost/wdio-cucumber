/**
 * Opens a URL in the current browser
 *
 * @Given I am on a site {string}
 * @param url
 */
export default function openUrl(url) {
  return this.browser.url(url);
}