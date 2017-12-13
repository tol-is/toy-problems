/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    
    const frequency = {};
    for (let c of s) {
        frequency[c] = (frequency[c] || 0) + 1;
    }
    for (let c of t) {
        if (frequency[c] === undefined) return false;
        frequency[c] -= 1;
        if (frequency[c] === 0) delete frequency[c];
    }
    
    return Object.keys(frequency).length === 0;
};