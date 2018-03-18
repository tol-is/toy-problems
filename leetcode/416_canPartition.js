/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const sum = nums.reduce((a, b) => a + b);
    if (sum % 2) return false;
    const target = sum / 2;
    
    const dp = [];
    for (let i = 0; i < nums.length + 1; i++) dp[i] = Array(target + 1).fill(false);
    dp[0][0] = true;
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j <= target; j++) {
            const take = dp[i][j - nums[i]];
            const drop = dp[i][j];
            dp[i + 1][j] = take || drop;
        }
    }
    
    return dp[nums.length][target];
};
