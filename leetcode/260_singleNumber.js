/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let combined = 0;
    for (let num of nums) combined ^= num;
    
    const setBit = combined ^ (combined & (combined - 1));
    let first = combined;
    for (let num of nums) {
        if (num & setBit) first ^= num;
    }
    
    return [first, combined ^ first];
};
