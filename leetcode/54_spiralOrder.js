/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const m = matrix.length;
    if (m === 0) return [];
    const n = matrix[0].length;
    
    let results = [];
    
    for (let i = 0; i < Math.ceil(Math.min(m, n) / 2); i++) {
        results = results.concat(getLayer(matrix, m, n, i));
    }
    
    return results;
};

const getLayer = (matrix, m, n, i0) => {
    let results = [];
    
    // top
    for (let i = i0, j = i0; j < n - i0; j++) results.push(matrix[i][j]);
    // right
    for (let i = i0 + 1, j = n - 1 - i0; i <= m - 1 - i0; i++) results.push(matrix[i][j]);
    
    if (i0 === m - 1 - i0 || i0 === n - 1 - i0) return results;
    
    // bottom
    for (let i = m - 1 - i0, j = n - 2 - i0; j >= i0 + 1; j--) results.push(matrix[i][j]);
    // left
    for (let i = m - 1 - i0, j = i0; i >= i0 + 1; i--) results.push(matrix[i][j]);
    
    return results;
};
