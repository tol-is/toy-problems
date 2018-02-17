/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n0, k0) {
    const results = [];
    
    const recurse = (n, k, i, combo) => {
        if (k === 0) {
            results.push(combo.slice());
            return;
        }
        if (n - i + 1 < k) return;
        
        for (; i <= n; i++) {
            combo.push(i);
            recurse(n, k - 1, i + 1, combo);
            combo.pop();
        }
    };
    recurse(n0, k0, 1, []);
    
    return results;
};
