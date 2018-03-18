/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const sum = nums.reduce((a, b) => a + b);
    if (sum % 2) return false;
    const target = sum / 2;
    
    let dp = Array(target + 1).fill(false);
    dp[0] = true;
    
   for (let num of nums) {
       const nextDp = Array(target + 1).fill(false);
       for (let i = 0; i <= target; i++) {
           const take = dp[i - num];
           const drop = dp[i];
           nextDp[i] = take || drop;
       }
       dp = nextDp;
   }
    
    return dp[target];
};
