/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    const results = [];
    const stack = [];
    for (let i = nums.length * 2 - 1; i >= 0; i--) {
        const j = i % nums.length;
        const num = nums[j];
        
        while (stack[stack.length - 1] <= num) {
            stack.pop();
        }
        
        results[j] = stack.length ? stack[stack.length - 1] : -1;
        stack.push(num);
    }
    
    return results;
};
