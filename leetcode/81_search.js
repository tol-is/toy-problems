/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    if (nums.length === 0) return false;
    const pivot = findPivot(nums);
    console.log(pivot);
    const n = nums.length;
    let lo = pivot;
    let hi = n + lo - 1;
    while (lo <= hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (nums[mid % n] > target) hi = mid - 1;
        else if (nums[mid % n] < target) lo = mid + 1;
        else return true;
    }
    return false;
};

const findPivot = (nums, lo = 0, hi = nums.length - 1) => {
    if (nums[lo] < nums[hi] || lo >= hi) {
        return lo;
    } else if (nums[lo] > nums[hi]) {
        const mid = Math.floor((lo + hi) / 2);
        if (nums[mid] < nums[lo]) return findPivot(nums, lo, mid);
        return findPivot(nums, mid + 1, hi);
    } else {
        const mid = Math.floor((lo + hi) / 2);
        if (nums[mid] < nums[lo]) {
            return findPivot(nums, lo, mid);
        } else if (nums[mid] > nums[lo]) {
            return findPivot(nums, mid + 1, hi);
        } else {
            for (let i = 1; i < nums.length; i++) {
                if (nums[i] < nums[i - 1]) return i;
            }
            return 0;
        }
    }
};
