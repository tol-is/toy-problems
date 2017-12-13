/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    if (num === 0) return '0';
    
    const sign = num >= 0;
    num = Math.abs(num);
    
    const digits = [];
    let digit;
    let place = 1;
    while (num) {
        digit = num % (7 ** place);
        num = Math.floor(num / 7);
        digits.unshift(digit);
    }
    
    return `${sign ? '' : '-'}${digits.join('')}`;
};