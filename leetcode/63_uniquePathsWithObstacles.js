/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid, i = 0, j = 0, dp) {
    if (!dp) {
        const n = obstacleGrid.length;
        const m = obstacleGrid[0].length;
        
        dp = [];
        for (let i = 0; i < n; i++) {
            dp.push([]);
            for (let j = 0; j < m; j++) {
                dp[i][j] = obstacleGrid[i][j] ? 0 : null;
            }
        }
        
        if (dp[n - 1][m - 1] === null) dp[n - 1][m - 1] = 1;
    }
    
    if (dp[i][j] !== null) return dp[i][j];
    
    let result = 0;
    
    if (!outOfRange(obstacleGrid, i + 1, j)) {
        if (dp[i + 1][j] === null) {
            dp[i + 1][j] = uniquePathsWithObstacles(obstacleGrid, i + 1, j, dp);
        }
        result += dp[i + 1][j];
    }
    if (!outOfRange(obstacleGrid, i, j + 1)) {
        if (dp[i][j + 1] === null) {
            dp[i][j + 1] = uniquePathsWithObstacles(obstacleGrid, i, j + 1, dp);
        }
        result += dp[i][j + 1];
    }
    
    return result;
};

const outOfRange = (grid, i, j) => i < 0 || j < 0 || i >= grid.length || j >= grid[0].length;
