/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums, lo = 0, hi = nums.length - 1) {
    if (hi === lo) return lo;
    if (hi - 1 === lo) return nums[hi] > nums[lo] ? hi : lo;
    
    const mid = Math.floor((hi + lo) / 2);
    if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) return mid;
    if (nums[mid] > nums[mid - 1]) return findPeakElement(nums, mid + 1, hi);
    return findPeakElement(nums, lo, mid - 1);
};