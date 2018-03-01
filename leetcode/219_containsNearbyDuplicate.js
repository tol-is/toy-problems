/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const indices = {};
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        
        if (indices[num] !== undefined) {
            if (i - indices[num] <= k) return true;
        }
        indices[num] = i;
    }
    return false;
};
