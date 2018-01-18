/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    const n = s1.length;
    
    const charCount = {};
    for (let c of s1) {
        charCount[c] = (charCount[c] || 0) + 1;
    }
    
    for (let i = 0; i < s2.length; i++) {
        const cAdd = s2.charAt(i);
        charCount[cAdd] = (charCount[cAdd] || 0) - 1;
        if (charCount[cAdd] === 0) delete charCount[cAdd];
        
        if (i >= n) {
            const cRemove = s2.charAt(i - n);
            charCount[cRemove] = (charCount[cRemove] || 0) + 1;
            if (charCount[cRemove] === 0) delete charCount[cRemove];
        }
        
        if (Object.keys(charCount).length === 0) return true;
    }
    
    return false;
};
