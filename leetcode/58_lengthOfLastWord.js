/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const trimmed = s.trim();
    const i = trimmed.lastIndexOf(' ');
    return trimmed.length - i - 1;
};
