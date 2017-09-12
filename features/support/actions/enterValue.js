/**
 *
 * @param query
 * @param element
 * @returns {*}
 */
export default function enterValue (query, element) {
  return this.browser.setValue(element, query)
};