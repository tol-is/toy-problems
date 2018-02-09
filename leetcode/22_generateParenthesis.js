/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n0) {
    const results = [];
    
    const recurse = (n, left = 0, right = 0, result = []) => {
        if (left > n0 || right > n0) return;
        
        if (n === 0) {
            results.push(result.join(''));
            return;
        }
        
        recurse(n - 1, left + 1, right, [...result, '(']);
        if (left > right) recurse(n - 1, left, right + 1, [...result, ')']);
    };
    
    recurse(n0 * 2);
    
    return results;
};
