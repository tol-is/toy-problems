/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const sum = nums.reduce((a, b) => a + b);
    if (sum % 2) return false;
    const target = sum / 2;
    
    let set = { 0: true };
    
    for (let num of nums) {
        if (num > target) continue;
        
        const nextSet = {};
        
        for (let k in set) {
            const sum = num + parseInt(k);
            if (sum === target) return true;
            if (sum > target) continue;
            nextSet[sum] = true;
        }
        
        Object.assign(set, nextSet);
    }
    
    return false;
};
