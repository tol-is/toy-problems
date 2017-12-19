/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const freq = {};
    let maxSoFar = 0;
    
    for (let num of nums) {
        if (freq[num]) continue;
        
        let lo = num;
        let hi = num;
        if (freq[num - 1]) lo = freq[num - 1][0];
        if (freq[num + 1]) hi = freq[num + 1][1];
        freq[num] = [lo, hi];
        freq[lo][1] = hi;
        freq[hi][0] = lo;
        
        if (hi - lo + 1 > maxSoFar) maxSoFar = hi - lo + 1;
    }
    
    return maxSoFar;
};
