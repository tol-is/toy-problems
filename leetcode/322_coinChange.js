/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const dp = Array(amount + 1).fill(Number.POSITIVE_INFINITY);
    dp[0] = 0;
    
    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (coin <= i) {
                if (dp[i - coin] >= 0) dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
            }
        }
        if (dp[i] === Number.POSITIVE_INFINITY) dp[i] = -1;
    }
    
    return dp[amount];
};
