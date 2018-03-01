/**
 * @param {character[][]} matrix
 * @return {number}
 */

var maximalSquare = function(matrix) {
    let stackedRows = matrix.map(row => row.join(''));
    const width = stackedRows.length > 0 ? stackedRows[0].length : 0;
    
    let maxLengthSoFar = 0;
    
    for (let i = 0; i < stackedRows.length; i++) {
        if (stackedRows[i].includes('1')) {
            maxLengthSoFar = 1;
            break;
        }
    }
    
    for (let i = 1; i < matrix.length; i++) {
        for (let j = 0; j + i < matrix.length; j++) {
            stackedRows[j] = stack(stackedRows[j], stackedRows[j + 1]);
            if (containsNConsecutiveOnes(stackedRows[j], i + 1)) {
                maxLengthSoFar = i + 1;
            }
        }
        if (maxLengthSoFar < i + 1) {
            break;
        }
    }
    return maxLengthSoFar ** 2;
};

var stack = (row1, row2) => {
    if (row1.length < 32) {
        return (parseInt(row1, 2) & parseInt(row2, 2)).toString(2);
    }
    
    let result = '';
    for (let i = 0; i < row1.length; i++) {
        const bit = row1[i] === '1' && row2[i] === '1' ? '1' : '0';
        result += bit;
    }
    return result;
};

var containsNConsecutiveOnes = (binStr, n) => {
    let count = 0;
    for (let c of binStr) {
        if (c === '1') {
            count += 1;
        } else {
            count = 0;
        }
        
        if (count === n) {
            return true;
        }
    }
    return false;
};