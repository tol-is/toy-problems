/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    for (let zero = 0, nonZero = 0; zero < nums.length; zero++) {
        if (nums[zero] !== 0) continue;
        while (nums[nonZero] === 0 || nonZero < zero) nonZero++;
        if (nonZero < nums.length) swap(nums, zero, nonZero);
    }
};
               
const swap = (arr, i, j) => {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
};
