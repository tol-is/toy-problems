/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;
    
    let i = 0;
    for (let num of nums) {
        if (num !== nums[i - 2]) nums[i++] = num;
    }
    
    return i;
};
