/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let lowest = 0;
    let highest = 0;
    let maxSum = Number.NEGATIVE_INFINITY;
    let acc = 0;
    
    for (let n of nums) {
        if (n > maxSum) maxSum = n;
        
        acc += n;
        if (acc > highest) {
            highest = acc;

            if (highest - lowest > maxSum) {
                maxSum = highest - lowest;
            }
        } else if (acc < lowest) {
            lowest = acc;
            highest = acc;
        }
    }
    
    return maxSum;
};
