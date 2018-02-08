/**
 * @param {number[]} A
 * @return {number}
 */
var maxRotateFunction = function(A) {
    if (A.length === 0) return 0;
    
    const totalSum = A.reduce((a, b) => a + b);
    const maxPos = A.map(x => x * (A.length - 1));
    const minusSelf = A.map(x => totalSum - x);
    
    let max = A.map((n, i) => n * i).reduce((a, b) => a + b);
    let currSum = max;
    for (let i = 0; i < A.length - 1; i++) {
        currSum = currSum + maxPos[i] - minusSelf[i];
        if (currSum > max) max = currSum;
    }
    
    return max;
};
