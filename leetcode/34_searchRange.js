/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const start = getStart(nums, target);
    if (start < 0) return [-1, -1];
    const end = getEnd(nums, target, start);
    return [start, end];
};

const getStart = (nums, target, lo = 0, hi = nums.length - 1) => {
    if (lo > hi) return -1;
    
    const mid = Math.floor((hi + lo) / 2);
    const num = nums[mid];
    
    if (num > target) return getStart(nums, target, lo, mid - 1);
    if (num < target) return getStart(nums, target, mid + 1, hi);
    if (mid === 0 || nums[mid - 1] < target) return mid;
    return getStart(nums, target, lo, mid - 1);
};

const getEnd = (nums, target, lo = 0, hi = nums.length - 1) => {
    const mid = Math.floor((hi + lo) / 2);
    const num = nums[mid];
    
    if (num > target) return getEnd(nums, target, lo, mid - 1);
    if (mid === nums.length - 1 || nums[mid + 1] > target) return mid;
    return getEnd(nums, target, mid + 1, hi);
};
