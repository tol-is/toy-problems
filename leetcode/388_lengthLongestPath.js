/**
 * @param {string} input
 * @return {number}
 */
var lengthLongestPath = function(input) {
    const tokens = input.split('\n');
    const stack = [];
    let maxLen = 0;
    let currLen = 0;
    
    for (let token of tokens) {
        const level = getTokenLevel(token);
        const len = token.length - level + 1;
        
        while (stack.length > level) {
            currLen -= stack.pop();
        }
        
        stack.push(len);
        currLen += len;
        if (isFile(token)) maxLen = Math.max(maxLen, currLen - 1);
    }
    
    return maxLen;
};

const getTokenLevel = (token) => {
    for (let i = 0; i < token.length; i++) {
        if (token[i] !== '\t') return i;
    }
    return 0;
};

const isFile = token => !!token.match(/\..+$/);
