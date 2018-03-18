/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function(nums) {
    const dp = [];
    let isCurrPlayer = nums.length % 2 ? 1 : -1;
    for (let i = 0; i < nums.length; i++) dp[i] = [];

    for (let len = 0; len < nums.length; len++) {
        for (let from = 0; from + len < nums.length; from++) {
            const to = from + len;
            if (len === 0) {
                dp[from][to] = isCurrPlayer * nums[from];
            } else {
                const takeLeft = isCurrPlayer * nums[from] + dp[from + 1][to];
                const takeRight = isCurrPlayer * nums[to] + dp[from][to - 1];
                dp[from][to] = isCurrPlayer > 0 ? Math.max(takeLeft, takeRight) : Math.min(takeLeft, takeRight);
            }
        }
        isCurrPlayer *= -1;
    }

    return dp[0][nums.length - 1] >= 0;
};
