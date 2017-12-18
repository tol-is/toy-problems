/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
    const memo = [];
    let maxSoFar = 0;
    
    for (let i = 0; i < A.length; i++) {
        memo[i] = [];
        for (let j = 0; j < B.length; j++) {
            if (A[i] === B[j]) {
                let count = 1;
                if (i > 0 && j > 0) {
                    count = memo[i - 1][j - 1] + 1;
                }
                memo[i][j] = count;
                if (count > maxSoFar) maxSoFar = count;
            } else {
                memo[i][j] = 0;
            }
        }
    }
    
    return maxSoFar;
};
