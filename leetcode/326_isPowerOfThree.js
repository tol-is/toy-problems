/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    return n.toString(3).match(/^10*$/) !== null;
};
