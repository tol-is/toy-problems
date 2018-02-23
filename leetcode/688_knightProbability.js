/**
 * @param {number} N
 * @param {number} K
 * @param {number} r
 * @param {number} c
 * @return {number}
 */
var knightProbability = function(N, K, r, c) {
    const memo = [];
    for (let i = 0; i < N; i++) {
        memo[i] = [];
        for (let j = 0; j < N; j++) {
            memo[i][j] = [];
        }
    }
    
    const recurse = (i, j, moves) => {
        if (moves === 0) return 1;
        if (memo[i][j][moves] !== undefined) return memo[i][j][moves] / 8;
        
        let result = 0;
        if (!outOfRange(i - 2, j - 1, N)) result += recurse(i - 2, j - 1, moves - 1);
        if (!outOfRange(i - 2, j + 1, N)) result += recurse(i - 2, j + 1, moves - 1);
        if (!outOfRange(i + 2, j - 1, N)) result += recurse(i + 2, j - 1, moves - 1);
        if (!outOfRange(i + 2, j + 1, N)) result += recurse(i + 2, j + 1, moves - 1);
        if (!outOfRange(i - 1, j - 2, N)) result += recurse(i - 1, j - 2, moves - 1);
        if (!outOfRange(i - 1, j + 2, N)) result += recurse(i - 1, j + 2, moves - 1);
        if (!outOfRange(i + 1, j - 2, N)) result += recurse(i + 1, j - 2, moves - 1);
        if (!outOfRange(i + 1, j + 2, N)) result += recurse(i + 1, j + 2, moves - 1);
        
        memo[i][j][moves] = result;
        return result / 8;
    };
    
    return recurse(r, c, K);
};

const outOfRange = (i, j, n) => i < 0 || j < 0 || i >= n || j >= n;
