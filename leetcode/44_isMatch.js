/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s0, p0) {
    const memo = [];
    for (let i = 0; i <= s0.length; i++) memo.push([]);
    
    const recurse = (s, p, p1, p2) => {
        if (p1 === s.length && p2 === p.length) return true;
        if (p1 > s.length || p2 > p.length) return false;
        
        if (memo[p1][p2] !== undefined) return memo[p1][p2];

        if (s[p1] === p[p2] || p[p2] === '?') return recurse(s, p, p1 + 1, p2 + 1);
        if (p[p2] === '*') {
            for (let i = 0; p1 + i <= s.length; i++) {
                if (recurse(s, p, p1 + i, p2 + 1)) {
                    memo[p1][p2] = true;
                    return true;
                }
            }
        }
        
        memo[p1][p2] = false;
        return false;
    }
    
    return recurse(s0, p0, 0, 0);
};
