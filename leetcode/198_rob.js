/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const n = nums.length;
    const withs = [];
    const withouts = [];
    let highestSoFar = 0;
    
    for (let i = 0; i < n; i++) {
        const num = nums[i];
        if (i === 0) {
            withs.push(num);
            withouts.push(0);
            highestSoFar = num;
        } else if (i === 1) {
            withs.push(num);
            withouts.push(withs[i - 1]);
            highestSoFar = Math.max(num, highestSoFar);
        } else {
            const newWith = Math.max(withs[i - 2], withouts[i - 1]) + num;
            const newWithout = Math.max(withs[i - 1], withouts[i - 1]);
            withs.push(newWith);
            withouts.push(newWithout);
            highestSoFar = Math.max(highestSoFar, newWith, newWithout);
        }
        
    }
    
    return highestSoFar;
};
