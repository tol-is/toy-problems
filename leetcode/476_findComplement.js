/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    const binStr = num.toString(2);
    const flipped = binStr.split('').map(b => b === '0' ? '1' : '0').join('');
    return parseInt(flipped, 2);
};
