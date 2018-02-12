/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
    strs = ['', ...strs];
    const zeroCount = strs.map(countChar('0'));
    const oneCount = strs.map(countChar('1'));
    
    const dp = [];
    for (let i = 0; i < strs.length; i++) {
        dp[i] = [];
        for (let j = 0; j <= m; j++) {
            dp[i][j] = [];
            for (let k = 0; k <= n; k++) {
                if (i === 0) {
                    dp[i][j][k] = 0;
                    continue;
                }
                
                if (zeroCount[i] > j || oneCount[i] > k) {
                    dp[i][j][k] = dp[i - 1][j][k];
                } else {
                    const drop = dp[i - 1][j][k];
                    const take = 1 + dp[i - 1][j - zeroCount[i]][k - oneCount[i]];
                    dp[i][j][k] = Math.max(drop, take);
                }
            }
        }
    }
    
    return dp[strs.length - 1][m][n];
};

const countChar = (char) => (str) => {
    let count = 0;
    for (let c of str) {
        if (c === char) count += 1;
    }
    return count;
};
