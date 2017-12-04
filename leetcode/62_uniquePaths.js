/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const memo = [];
    const length = m * n;
    
    for (let i = length - 1; i >= 0; i--) {
        if (i + n >= length) {
            memo[i] = 1;
        } else if ((i + 1) % n === 0) {
            memo[i] = 1;
        } else {
            const right = memo[i + 1];
            const down = memo[i + n];
            memo[i] = right + down;
        }
        
    }
    
    return memo[0];
};