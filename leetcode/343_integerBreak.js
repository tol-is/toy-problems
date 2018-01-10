/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    if (n <= 3) return n - 1;
    
    const memo = [null, null, 2, 3];
    
    for (let i = 4; i <= n; i++) {
        let maxSoFar = 1;
        for (let j = 2; j < i; j++) {
            const memoizedMax = memo[j];
            const newProduct = memoizedMax * (i - j);
            if (newProduct > maxSoFar) maxSoFar = newProduct;
        }
        memo[i] = maxSoFar;
    }
    
    return memo[n];
};
