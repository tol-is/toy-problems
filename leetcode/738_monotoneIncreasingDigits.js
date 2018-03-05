/**
 * @param {number} N
 * @return {number}
 */
var monotoneIncreasingDigits = function(N) {
    const digits = getDigits(N);
    
    let nines = digits.length;
    for (let i = digits.length - 1; i > 0; i--) {
        if (digits[i] < digits[i - 1]) {
            digits[i - 1] -= 1;
            nines = i;
        }
    }
    
    for (let i = nines; i < digits.length; i++) {
        digits[i] = 9;
    }
    
    return parseInt(digits.join(''));
};

const getDigits = N => N.toString().split('');
