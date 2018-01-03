/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let slow = 0;
    let fast = 0;
    
    while (fast < nums.length) {
        while (nums[fast] === val) {
            fast += 1;
        }
        
        if (fast >= nums.length) {
            break;
        }
        
        nums[slow] = nums[fast];
        slow += 1;
        fast += 1;
    }
    
    nums.length = slow;
    return slow;
};
