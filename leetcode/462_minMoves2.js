/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
    nums.sort((a, b) => a - b);
    const median = nums[Math.floor(nums.length / 2)];
    return nums.map(n => Math.abs(n - median)).reduce((a, b) => a + b);
};
