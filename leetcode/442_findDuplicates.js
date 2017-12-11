/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    const results = [];
    
    for (let i = 0; i < nums.length; i++) {
        const val = nums[i];
        if (val === i + 1) continue;
        
        let j = val - 1;
        while (true) {
            if (!nums[i]) break;
            if (nums[i] === i + 1) break;
            if (nums[i] === nums[j]) {
                results.push(nums[i]);
                nums[i] = undefined;
                break;
            }
            swap(nums, i, j);
            j = nums[i] - 1;
        }
    }
    
    return results;
};

const swap = (arr, i, j) => {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
};
