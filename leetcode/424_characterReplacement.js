/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    const count = Array(26).fill(0);
    let maxCount = 0;
    let maxLen = 0;
    for (let hi = 0, lo = 0; hi < s.length; hi++) {
        const cAdd = s.charCodeAt(hi) - 65;
        count[cAdd] += 1;
        maxCount = Math.max(maxCount, count[cAdd]);
        
        while (maxCount + k < hi - lo + 1) {
            const cRemove = s.charCodeAt(lo) - 65;
            count[cRemove] -= 1;
            lo += 1;
        }
        
        maxLen = Math.max(maxLen, hi - lo + 1);
    }
    return maxLen;
};
