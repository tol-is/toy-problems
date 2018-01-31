/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const dp = [];
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        let maxForNum = 1;
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                if (dp[j] > maxForNum) maxForNum = dp[j];
            }
        }
        dp[i] = maxForNum + 1;
        if (maxForNum > max) max = maxForNum;
    }
    return max;
};
