/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let max = 0;
    for (let i = 0; i <= max; i++) {
        const num = nums[i];
        max = Math.max(max, num + i);
        if (max >= nums.length - 1) return true;
    }
    return false;
};
