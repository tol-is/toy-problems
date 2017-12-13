/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const result = [];
    const n = p.length;
    let pattern = getCharCount(p);
    
    for (let i = 0; i < n; i++) {
        const code = s.charCodeAt(i) - 97;
        pattern[code] = (pattern[code] || 0) - 1;
    }
    
    if (hasAllZeroes(pattern)) result.push(0);
    
    for (let i = n; i < s.length; i++) {
        const addCode = s.charCodeAt(i - n) - 97;
        pattern[addCode] = (pattern[addCode] || 0) + 1;
        const removeCode = s.charCodeAt(i) - 97;
        pattern[removeCode] = (pattern[removeCode] || 0) - 1;
        if (hasAllZeroes(pattern)) result.push(i - n + 1);
    }
    
    return result;
};

const getCharCount = (str, start = 0, end = str.length) => {
    const result = [];
    for (let i = start; i < end; i++) {
        const code = str.charCodeAt(i) - 97;
        result[code] = (result[code] || 0) + 1;
    }
    return result;
};

const hasAllZeroes = (arr) => {
    for (let num of arr) {
        if (num) return false;
    }
    return true;
};