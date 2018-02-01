/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    const dp = {};
    let max = [];
    
    nums.sort((a, b) => a - b);
    
    for (let num of nums) {
        dp[num] = dp[1] ? [1, num] : [num];
        
        for (let i = 2; i <= Math.sqrt(num); i++) {
            const j = num / i;
            if (num % i === 0 && dp[i] && dp[i].length >= dp[num].length) dp[num] = dp[i].concat([num]);
            if (dp[j] && dp[j].length >= dp[num].length) dp[num] = dp[j].concat([num]);
        }
        if (dp[num].length > max.length) max = dp[num];
    }
    
    return max;
};
