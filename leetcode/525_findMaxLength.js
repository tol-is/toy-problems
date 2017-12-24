/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let max = 0;
    let sum = 0;
    
    const firstIndex = { 0: -1 };
    
    for (let i = 0; i < nums.length; i++) {
        sum += (nums[i] ? 1 : -1);
        
        if (firstIndex.hasOwnProperty(sum)) {
            max = Math.max(max, i - firstIndex[sum]);
        } else {
            firstIndex[sum] = i;
        }
    }
    
    return max;
};
