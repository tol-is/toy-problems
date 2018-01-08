/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    const result = [];
    if (nums.length === 0) {
        return result;
    }
    
    let lastStart = nums[0];
    let lastEnd = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] - 1 === nums[i - 1]) {
            lastEnd += 1;
        } else {
            result.push(makeRange(lastStart, lastEnd));
            lastStart = nums[i];
            lastEnd = nums[i];
        }
    }
    
    result.push(makeRange(lastStart, lastEnd))
    
    return result;
};

const makeRange = (start, end) => start === end ? start.toString() : `${start}->${end}`;
