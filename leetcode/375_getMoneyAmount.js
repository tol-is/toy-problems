/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function(n) {
    const dp = [];
    
    for (let i = 0; i <= n; i++) {
        dp[i] = [];
        dp[i][i] = 0;
    }
    
    for (let len = 1; len < n; len++) {
        for (let from = 1; from + len <= n; from++) {
            const to = from + len;
            dp[from][to] = Number.POSITIVE_INFINITY;
            for (let center = from; center <= to; center++) {
                const left = center === from ? center: dp[from][center - 1] + center;
                const right = center === to ? center : dp[center + 1][to] + center;
                const max = Math.max(left, right);
                dp[from][to] = Math.min(dp[from][to], max);
            }
        }
    }
    
    return dp[1][n];
};
