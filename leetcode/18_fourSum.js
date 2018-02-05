/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums = nums.slice();
    nums.sort((a, b) => a - b);
    
    const hash = {};
    
    const dp = [];
    for (let i = 0; i < nums.length; i++) {
        dp[i] = [];
        for (let j = i + 1; j < nums.length; j++) {
            const sum = nums[i] + nums[j];
            dp[i][j] = sum;
            if (!hash[sum]) hash[sum] = [];
            hash[sum].push([i, j]);
        }
    }
    
    const set = new Set();
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const remainder = target - dp[i][j];
            if (hash[remainder]) {
                for (let [k, l] of hash[remainder]) {
                    if (i < k && i < l && j < k && j < l) {
                        set.add([nums[i], nums[j], nums[k], nums[l]].join(','));
                    }
                }
            }
        }
    }
    
    return Array.from(set).map(str => str.split(',').map(n => parseInt(n)));
};
