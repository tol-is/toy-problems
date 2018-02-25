/**
 * @param {string} p
 * @return {number}
 */
var findSubstringInWraproundString = function(p) {
    if (p.length === 0) return 0;
    
    const maxLenFrom = Array(26).fill(0);
    
    let currLen = 1;
    let startIndex = p.charCodeAt(0) - 97;
    
    for (let i = 1; i < p.length; i++) {
        const index = p.charCodeAt(i) - 97;
        
        if ((startIndex + currLen) % 26 === index) {
            currLen++;
        } else {
            updateMaxLen(maxLenFrom, startIndex, currLen);
            currLen = 1;
            startIndex = index;
        }
    }
    updateMaxLen(maxLenFrom, startIndex, currLen);

    return maxLenFrom.reduce((a, b) => a + b);
};

const updateMaxLen = (maxLenFrom, startIndex, currLen) => {
    for (let i = 0; i < 26; i++) {
        const index = (startIndex + i) % 26;
        maxLenFrom[index] = Math.max(maxLenFrom[index], currLen - i);
    }
};
