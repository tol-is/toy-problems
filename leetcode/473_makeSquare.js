/**
 * @param {number[]} nums
 * @return {boolean}
 */
var makesquare = function(nums) {
    if (nums.length < 4) return false;
    const len = nums.reduce((a, b) => a + b) / 4;
    if (!Number.isInteger(len)) return false;
    
    return recurse(nums, 0, [0, 0, 0, 0], len);
};

const recurse = (nums, i, sides, len) => {
    if (i === nums.length) {
        return sides[0] === len && sides[1] === len && sides[2] === len && sides[3] === len;
    }
    
    for (let j = 0; j < 4; j++) {
        if (nums[i] + sides[j] > len) continue;

        sides[j] += nums[i];
        if (recurse(nums, i + 1, sides, len)) return true;
        sides[j] -= nums[i];
    }
    return false;
};
