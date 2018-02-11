/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    if (amount === 0) return 1;
    if (coins.length === 0) return 0;
    
    coins.sort((a, b) => b - a);
    const dp = [];
    for (let coin of coins) dp.push([1]);
    
    const recurse = (sum, i) => {
        if (dp[i][sum] !== undefined) return dp[i][sum];
        
        let result = 0;
        for (let j = i; j < coins.length; j++) {
            const coin = coins[j];
            if (coin > sum) continue;
            result += coin < sum ? recurse(sum - coin, j) : 1;
        }
        dp[i][sum] = result;
        return result;
    };
    
    return recurse(amount, 0);
};
