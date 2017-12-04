/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const memo = [];
    for (let i = 0; i < m; i++) {
        memo[i] = [];
    }
    
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            if (i === m - 1 && j === n - 1) {
                memo[i][j] = 1;
            } else {
                const right = j === n - 1 ? 0 : memo[i][j + 1];
                const down = i === m - 1 ? 0 : memo[i + 1][j];
                memo[i][j] = right + down;
            }
        }
    }
    
    return memo[0][0];
};