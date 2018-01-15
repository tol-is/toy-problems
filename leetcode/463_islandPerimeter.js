/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let result = 0;
    const height = grid.length;
    const width = grid[0].length;
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (grid[i][j] === 0) continue;
            
            if (i === 0 || grid[i - 1][j] === 0) result += 1;
            if (i === height - 1 || grid[i + 1][j] === 0) result += 1;
            if (j === 0 || grid[i][j - 1] === 0) result += 1;
            if (j === width - 1 || grid[i][j + 1] === 0) result += 1;
        }
    }
    return result;
};
