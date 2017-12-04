/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const memo = [];
    memo[n - 1] = 1;
    
    for (let i = 0; i < m; i++) {
        for (let j = n - 2; j >= 0; j--) {
            memo[j] = (memo[j] || 0) + memo[j + 1];
        }
    }
    
    return memo[0];
};