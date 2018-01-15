/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const negative = x < 0;
    const reversed = parseInt(x.toString().split('').reverse().join(''));
    if (reversed > Math.pow(2, 31)) return 0;
    return reversed * (negative ? -1 : 1);
};
