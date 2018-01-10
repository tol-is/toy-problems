/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let r = 0;
    let b = nums.length - 1;
    
    for (let i = 0; i <= b; i++) {
        if (nums[i] === 0) swap(nums, i, r++);
        if (nums[i] === 2) swap(nums, i--, b--);
    }
};

const swap = (arr, i, j) => {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
};
