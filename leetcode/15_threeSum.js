/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    
    const results = [];
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) continue;
        
        const target = 0 - nums[i];
        let lo = i + 1;
        let hi = nums.length - 1;
        
        while (lo < hi) {
            if (nums[lo] + nums[hi] > target) {
                hi--;
            } else if (nums[lo] + nums[hi] < target) {
                lo++;
            } else {
                results.push([nums[i], nums[lo], nums[hi]]);
                lo++;
                hi--;
            }
            while (lo > i + 1 && nums[lo] === nums[lo - 1]) lo++;
            while (nums[hi] === nums[hi + 1]) hi--;
        }
    }
    
    return results;
};
