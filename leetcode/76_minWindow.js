/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const count = {};
    let total = t.length;
    
    for (let c of t) {
        count[c] = (count[c] || 0) + 1;
    }
    
    let lo = 0;
    let hi = 0;
    let minSoFar = [0, 0, Number.POSITIVE_INFINITY];
    
    while (hi < s.length && lo <= hi) {
        while (total > 0 && hi < s.length) {
            const c = s.charAt(hi);
            if (count.hasOwnProperty(c)) {
                count[c] -= 1;
                if (count[c] >= 0) total -= 1;
            }
            hi += 1;
        }
        
        while (total === 0 && lo <= hi) {
            const range = hi - lo;
            if (range < minSoFar[2]) minSoFar = [lo, hi, range];
            
            const c = s.charAt(lo);
            if (count.hasOwnProperty(c)) {
                count[c] += 1;
                if (count[c] > 0) total += 1;
            }
            lo += 1;
        }
    }
    
    return s.slice(minSoFar[0], minSoFar[1]);
};
