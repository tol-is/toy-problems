/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function(nums) {
    if (nums.length < 2) return nums.length;
    
    let prevInc = null;
    let count = 1;
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) continue;
        
        const currInc = nums[i] > nums[i - 1];
        if (prevInc !== currInc) {
            count++;
            prevInc = currInc;
        }
    }
    
    return count;
};
