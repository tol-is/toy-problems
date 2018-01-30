/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function(nums) {
    let n = nums.length;
    if (n < 2) return 0;
    
    let max = 0;
    let min = Number.POSITIVE_INFINITY;
    
    for (let num of nums) {
        if (num > max) max = num;
        if (num < min) min = num;
    }
    
    if (max === min) return 0;
    
    const bucketSize = (max - min) / (n - 1);
    const buckets = [];
    
    for (let i = 0; i < n; i++) {
        buckets.push([]);
    }
    
    for (let num of nums) {
        const index = Math.floor((num - min) / bucketSize);
        const bucket = buckets[index];
        if (bucket[0] === undefined || num < bucket[0]) bucket[0] = num;
        if (bucket[1] === undefined || num > bucket[1]) bucket[1] = num;
    }
    
    let maxGap = 0;
    let prevMax = buckets[0][1];
    for (let i = 1; i < n; i++) {
        const bucket = buckets[i];
        if (bucket[0] === undefined) continue;
        const gap = bucket[0] - prevMax;
        if (gap > maxGap) maxGap = gap;
        prevMax = bucket[1];
    }
    
    return maxGap;
};
