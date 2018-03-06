/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var customSortString = function(S, T) {
    const chars = {};
    for (let c of T) chars[c] = (chars[c] || 0) + 1;
    
    const results = [];
    for (let c of S) {
        for (let i = 0; i < (chars[c] || 0); i++) {
            results.push(c);
        }
        delete chars[c];
    }
    
    for (let c in chars) {
        for (let i = 0; i < chars[c]; i++) {
            results.push(c);
        }
    }
    
    return results.join('');
};
