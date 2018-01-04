/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let slow = 0;
    let fast = 0;
    let lastNum;
    let currentNum;
    
    while (fast < nums.length) {
        currentNum = nums[fast];
        
        if (currentNum !== lastNum || fast === 0) {
            nums[slow] = currentNum;
            lastNum = currentNum;
            slow += 1;
        }
        
        fast += 1;
    }
    
    return slow;
};
