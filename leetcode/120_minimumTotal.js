/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let dp = triangle[triangle.length - 1];
    
    for (let level = triangle.length - 2; level >= 0; level--) {
        let nextDp = [];
        for (let i = 0; i <= level; i++) {
            nextDp[i] = Math.min(dp[i], dp[i + 1]) + triangle[level][i];
        }
        dp = nextDp;
    }
    
    return dp[0];
};
