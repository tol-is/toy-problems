/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    let max = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j]) {
                const size = getReachableFrom(grid, i, j);
                if (size > max) max = size;
            }
        }
    }
    return max;
};

const getReachableFrom = (grid, i, j) => {
    let result = 1;
    grid[i][j] = 0;
    if (inRange(grid, i - 1, j) && grid[i - 1][j]) result += getReachableFrom(grid, i - 1, j);
    if (inRange(grid, i + 1, j) && grid[i + 1][j]) result += getReachableFrom(grid, i + 1, j);
    if (inRange(grid, i, j - 1) && grid[i][j - 1]) result += getReachableFrom(grid, i, j - 1);
    if (inRange(grid, i, j + 1) && grid[i][j + 1]) result += getReachableFrom(grid, i, j + 1);
    return result;
};

const inRange = (grid, i, j) => {
    return i >= 0 && i < grid.length && j >= 0 && j < grid[0].length;
};
