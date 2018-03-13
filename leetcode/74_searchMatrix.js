/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const m = matrix.length;
    if (m === 0) return false;
    const n = matrix[0].length;
    
    const rowIndex = binSearch(matrix, target, 0, m - 1, rowComparator);
    if (rowIndex < 0) return false;
    
    return binSearch(matrix[rowIndex], target, 0, n - 1, numComparator) >= 0;
};

const binSearch = (arr, target, lo, hi, comparator) => {
    if (lo > hi) return -1;
    
    const mid = Math.floor((hi + lo) / 2);
    const el = arr[mid];
    const compare = comparator(el, target);
    
    if (compare < 0) return binSearch(arr, target, mid + 1, hi, comparator);
    if (compare > 0) return binSearch(arr, target, lo, mid - 1, comparator);
    return mid;
};

const rowComparator = (row, target) => {
    if (row[row.length - 1] < target) return -1;
    if (row[0] > target) return 1;
    return 0;
};

const numComparator = (num, target) => num - target;
