/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n, lo = 1, hi = 9) {
    if (hi - lo + 1 < k || n < lo) return [];
    
    if (k === 1) {
        if (lo <= n && n <= hi) {
            return [[n]];
        } else {
            return [];
        }
    }
    
    let results = [];
    
    for (let i = lo; i <= hi; i++) {
        const nextResults = combinationSum3(k - 1, n - i, i + 1, hi);
        results = results.concat(nextResults.map(r => ([i]).concat(r)));
    }
    
    return results;
};
