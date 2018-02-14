/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    const result = [];
    for (let i = 0; i < n; i++) {
        result.push([]);
    }
    
    let num = 0;
    const recurse = (len, i0, j0) => {
        if (len === 0) return;
        if (len === 1) {
            result[i0][j0] = ++num;
            return;
        }
        
        // top
        for (let j = j0; j < j0 + len - 1; j++) {
            result[i0][j] = ++num;
        }
        // right
        for (let i = i0; i < i0 + len - 1; i++) {
            result[i][j0 + len - 1] = ++num;   
        }
        // bottom
        for (let j = j0 + len - 1; j > j0; j--) {
            result[i0 + len - 1][j] = ++num;
        }
        // left
        for (let i = i0 + len - 1; i > i0; i--) {
            result[i][j0] = ++num;
        }
        recurse(len - 2, i0 + 1, j0 + 1);
    };
    recurse(n, 0, 0);
    
    return result;
};
