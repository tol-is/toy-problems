/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    nums = nums.slice();
    let changed = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] > nums[i]) {
            if (changed >= 1) {
                return false;
            }
            changed += 1;
            
            if (i === 1) {
                nums[i - 1] = nums[i];
            } else if (nums[i - 2] <= nums[i]) {
                nums[i - 1] = nums[i - 2];
            } else if (nums[i + 1] !== undefined && nums[i + 1] >= nums[i - 1]) {
                nums[i] = nums[i + 1];
            } else if (i === nums.length - 1) {
                return true;
            } else {
                return false;
            }
        }
    }
    return true;
};