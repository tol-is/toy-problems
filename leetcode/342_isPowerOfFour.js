/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    return num.toString(4).match(/^10*$/) !== null;
};
