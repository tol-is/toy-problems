/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    if (nums.length === 1 && nums[0] >= 0) return 0;
    
    const reachable = [0];
    
    for (let i = 0, steps = 0; i < nums.length; i++) {
        const dest = nums[i] + i;
        reachable[steps + 1] = Math.max((reachable[steps + 1] || 0), dest);
        if (reachable[steps + 1] >= nums.length - 1) return steps + 1;
        if (reachable[steps] === i) steps++;        
    }
    
    return -1;
};
