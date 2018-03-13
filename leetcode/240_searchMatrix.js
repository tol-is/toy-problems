/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target, { rowLo, rowHi, colLo, colHi } = getDefaultCoords(matrix)) {
    if (rowHi < 0) return false;
    
    while (colLo <= colHi && rowLo <= rowHi) {
        if (hasMatch(matrix, target, rowLo, rowHi, colLo, colHi)) return true;
        
        rowLo = getRowLo(matrix, target, rowLo, rowHi, colHi);
        rowHi = getRowHi(matrix, target, rowLo, rowHi, colLo);
        
        if (rowLo > rowHi) return false;
        
        colLo = getColLo(matrix, target, colLo, colHi, rowHi);
        colHi = getColHi(matrix, target, colLo, colHi, rowLo);
    }
    
    return false;
};

const hasMatch = (matrix, target, rowLo, rowHi, colLo, colHi) => (
    matrix[rowLo][colLo] === target || matrix[rowLo][colHi] === target || matrix[rowHi][colLo] === target || matrix[rowHi][colHi] === target
);
    
const getDefaultCoords = (matrix) => ({
    rowLo: 0,
    rowHi: matrix.length - 1,
    colLo: 0,
    colHi: (matrix.length ? matrix[0].length : 0) - 1,
});

const getRowLo = (matrix, target, lo, hi, colHi) => {    
    if (lo > hi) return matrix.length;
    
    const mid = Math.floor((hi + lo) / 2);
    
    if (matrix[mid][colHi] < target) return getRowLo(matrix, target, mid + 1, hi, colHi);
    if (mid === 0 || matrix[mid - 1][colHi] < target) return mid;
    return getRowLo(matrix, target, lo, mid - 1, colHi);
};

const getRowHi = (matrix, target, lo, hi, colLo) => {
    if (lo > hi) return -1;
    
    const mid = Math.floor((hi + lo) / 2);

    if (matrix[mid][colLo] > target) return getRowHi(matrix, target, lo, mid - 1, colLo);
    if (mid === matrix.length - 1 || matrix[mid + 1][colLo] > target) return mid;
    return getRowHi(matrix, target, mid + 1, hi, colLo);
};

const getColLo = (matrix, target, lo, hi, rowHi) => {
    if (lo > hi) return matrix[0].length;
    
    const mid = Math.floor((hi + lo) / 2);

    if (matrix[rowHi][mid] < target) return getColLo(matrix, target, mid + 1, hi, rowHi);
    if (mid === 0 || matrix[rowHi][mid - 1] < target) return mid;
    return getColLo(matrix, target, lo, mid - 1, rowHi);
};

const getColHi = (matrix, target, lo, hi, rowLo) => {
    if (lo > hi) return -1;
    
    const mid = Math.floor((hi + lo) / 2);
    
    if (matrix[rowLo][mid] > target) return getColHi(matrix, target, lo, mid - 1, rowLo);
    if (mid === matrix[0].length - 1 || matrix[rowLo][mid + 1] > target) return mid;
    return getColHi(matrix, target, mid + 1, hi, rowLo);
};
