/**
 * Converts a space-separated string to camelCase format.
 * The first word starts with a lowercase letter, and subsequent words
 * have their first letter capitalized with no separators between words.
 *
 * @param {string} str - The input string with space-separated words
 * @returns {string} The string converted to camelCase format
 *
 * @example
 * camelCase('hello world') // returns 'helloWorld'
 * camelCase('the quick brown fox') // returns 'theQuickBrownFox'
 */

/**
 * Converts a space-separated string to dot.case format.
 * All words are converted to lowercase and separated by dots.
 *
 * @param {string} str - The input string with space-separated words
 * @returns {string} The string converted to dot.case format
 *
 * @example
 * dotCase('hello world') // returns 'hello.world'
 * dotCase('the quick brown fox') // returns 'the.quick.brown.fox'
 */
function camelCase(str) {
    return str
        .split(' ')
        .map((word, index) => {
            if (index === 0) {
                return word.charAt(0).toLowerCase() + word.slice(1);
            }
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join('');
}
function dotCase(str) {
    return str
        .split(' ')
        .join('.')
        .toLowerCase();
}