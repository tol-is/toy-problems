/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    k = Math.log(k);
    nums = nums.map(Math.log);
    
    for (let i = 1; i < nums.length; i++) {
        nums[i] += nums[i - 1];
    }
    
    let count = 0;
    
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j <= nums.length; j++) {
            if (j === nums.length || nums[j] - (nums[i - 1] || 0) >= k) {
                count += (j - i);
                break;
            }
        }
    }
    
    return count;
};