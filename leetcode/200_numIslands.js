/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (grid.length === 0) return 0;
    
    let count = 0;
    
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                dfs(grid, i, j);
                count += 1;
            }
        }
    }
    
    return count;
};

const dfs = (grid, i, j) => {
    grid[i][j] = '0';
    
    if (!outOfRange(grid, i - 1, j) && grid[i - 1][j] === '1') dfs(grid, i - 1, j);
    if (!outOfRange(grid, i + 1, j) && grid[i + 1][j] === '1') dfs(grid, i + 1, j);
    if (!outOfRange(grid, i, j - 1) && grid[i][j - 1] === '1') dfs(grid, i, j - 1);
    if (!outOfRange(grid, i, j + 1) && grid[i][j + 1] === '1') dfs(grid, i, j + 1);
};

const outOfRange = (grid, i, j) => i < 0 || j < 0 || i >= grid.length || j >= grid[0].length;
