/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    const memo = [0, 1];
    for (let i = 2; i <= n; i++) {
        if (isPerfectSquare(i)) {
            memo[i] = 1;
            continue;
        }
        
        memo[i] = i;
        for (let j = 1; j <= i / 2; j++) {
            memo[i] = Math.min(memo[i], memo[j] + memo[i - j]);
        }
    }
    
    return memo[n];
};

const isPerfectSquare = (n) => Math.sqrt(n) === Math.floor(Math.sqrt(n));
