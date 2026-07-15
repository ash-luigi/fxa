/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

// Swap the keys and values of an object
/**
 * Swap the keys and values of an object.
 *
 * @param {Record<string, string|number>} obj - An object whose string keys map to string or number values.
 * @returns {Record<string, string>} A new object where each original value (converted to string) is a key
 * and its corresponding value is the original key. If multiple keys have the same value, the last one
 * encountered in enumeration order will be used.
 */
export function swapObjectKeysAndValues(obj: {
  [key: string]: string | number;
}) {
  var result: { [key: string | number]: string } = {};
  for (var key in obj) {
    result[obj[key]] = key;
  }
  return result;
}

// Parse a comma-separated list with allowance for varied whitespace
/**
 * Parse a comma-separated string into an array of trimmed, non-empty items.
 *
 * @param {string} s - A comma-separated string (may contain extra whitespace); if falsy, an empty string is used.
 * @returns {string[]} An array of trimmed, non-empty substrings from the input.
 */
export function commaSeparatedListToArray(s: string) {
  return (s || '')
    .trim()
    .split(',')
    .map((c) => c.trim())
    .filter((c) => !!c);
}
