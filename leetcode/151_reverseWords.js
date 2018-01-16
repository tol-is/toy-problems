/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    return str.split(' ').reverse().filter(x => x !== '').join(' ');
};
