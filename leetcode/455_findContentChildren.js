/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    g = getSorted(g);
    s = getSorted(s);
    
    let i = 0;
    let j = 0;
    
    let count = 0;
    while (i < g.length && j < s.length) {
        if (g[i] <= s[j]) {
            count++;
            i++;
        }
        j++;
    };
    
    return count;
};

const getSorted = (arr) => arr.sort((a, b) => a - b);
