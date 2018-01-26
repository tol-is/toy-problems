/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s) {
    let maxSoFar = s.length ? 1 : 0;
    const memo = [];
    for (let i = 0; i < s.length; i++) {
        memo.push([]);
        memo[i][i] = 1;
    }
    
    for (let offset = 1; offset < s.length; offset++) {
        for (let i = 0; i + offset < s.length; i++) {
            const j = i + offset;
            
            const dropLeft = memo[i + 1][j];
            const dropRight = memo[i][j - 1];
            const incBoth = (memo[i + 1][j - 1] || 0) + (s[i] === s[j] ? 2 : 0);
            
            const max = Math.max(dropLeft, dropRight, incBoth);
            memo[i][j] = max;
            if (max > maxSoFar) maxSoFar = max;
        }
    }
    
    return maxSoFar;
};
