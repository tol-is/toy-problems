/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    let result = 0;
    
    for (let i = 0; i < s.length; i++) {
        const val = s.charCodeAt(s.length - i - 1) - 64;
        result += val * Math.pow(26, i);
    }
    
    return result;
};
