/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let current = 0;
    let increment = 1;
    
    while (current < num) {
        current += increment;
        if (current === num) return true;
        increment += 2;
    }
    
    return false;
};
