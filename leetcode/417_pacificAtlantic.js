/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var pacificAtlantic = function(matrix) {
    const m = matrix.length;
    if (m === 0) return [];
    const n = matrix[0].length;
    
    const canReach = [];
    for (let i = 0; i < m; i++) {
        canReach[i] = Array(n).fill(0);
    }

    const outOfRange = (i, j) => (i < 0 || j < 0 || i >= m || j >= n);
    
    const shouldVisit = (i, j, ocean, height) => (!outOfRange(i, j) && (canReach[i][j] & ocean) === 0 && matrix[i][j] >= height);
    
    const markCanReach = (i, j, ocean) => {
        canReach[i][j] |= ocean;
        const height = matrix[i][j];
        if (shouldVisit(i - 1, j, ocean, height)) markCanReach(i - 1, j, ocean);
        if (shouldVisit(i + 1, j, ocean, height)) markCanReach(i + 1, j, ocean);
        if (shouldVisit(i, j - 1, ocean, height)) markCanReach(i, j - 1, ocean);
        if (shouldVisit(i, j + 1, ocean, height)) markCanReach(i, j + 1, ocean);
    };
    
    for (let j = 0; j < n; j++) {
        markCanReach(0, j, 1);
        markCanReach(m - 1, j, 2);
    }
    for (let i = 0; i < m; i++) {
        markCanReach(i, 0, 1);
        markCanReach(i, n - 1, 2);
    }
    
    const results = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (canReach[i][j] === 3) results.push([i, j]);
        }
    }
    return results;
};
