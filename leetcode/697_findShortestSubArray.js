/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let max = 0;
    let maxElements = [];
    let count = {};
    
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (!count[num]) count[num] = [];
        count[num].push(i);
        
        if (count[num].length === max) {
            max = count[num].length;
            maxElements.push(num);
        } else if (count[num].length > max) {
            max = count[num].length;
            maxElements = [num];
        }
    }
    
    let minLen = nums.length;
    for (let num of maxElements) {
        const indices = count[num];
        const len = indices[max - 1] - indices[0] + 1;
        if (len < minLen) minLen = len;
    }
    
    return minLen;
};
