/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const words = s.split(' ');
    return words.map((s) => s.split('').reverse().join('')).join (' ');
};
