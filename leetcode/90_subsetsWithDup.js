/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    const numsWithFreq = getNumsWithFreq(nums);
    
    const results = [];
    
    const recurse = (i, seq) => {
        if (i >= numsWithFreq.length) {
            results.push(seq.slice());
            return;
        }
        
        const [num, maxFreq] = numsWithFreq[i];
        const originalLen = seq.length;
        
        for (let freq = 0; freq <= maxFreq; freq++) {
            for (let j = 0; j < freq; j++) {
                seq.push(num);
            }
            
            recurse(i + 1, seq);
            
            for (let j = 0; j < freq; j++) {
                seq.pop();
            }
        }
        
    };
    recurse(0, []);
    
    return results;
};

const getNumsWithFreq = (nums) => {
    const count = {};
    for (let num of nums) {
        count[num] = (count[num] || 0) + 1;
    }
    const result = [];
    for (let num in count) {
        result.push([parseInt(num), count[num]]);
    }
    return result;
};
