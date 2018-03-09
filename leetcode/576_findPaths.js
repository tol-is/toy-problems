/**
 * @param {number} m
 * @param {number} n
 * @param {number} N
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
var findPaths = function(m, n, N, i, j) {
    const cumulative = makeGrid(m, n);
    let prev = makeGrid(m, n);
    let curr = makeGrid(m, n);
    
    for (let i = 0; i < N; i++) {
        if (i === 0) fillBoundaries(curr, m, n);
        else fillCurr(curr, prev, m, n);
        
        addToCumulative(curr, cumulative, m, n);
        [prev, curr] = [curr, prev];
    }
    
    return cumulative[i][j];
};

const makeGrid = (m, n) => {
    const grid = [];
    for (let i = 0; i < m; i++) {
        grid[i] = Array(n).fill(0);
    }
    return grid;
}

const fillBoundaries = (curr, m, n) => {
    // top, bottom
    for (let j = 0; j < n; j++) {
        curr[0][j]++;
        curr[m - 1][j]++;
    }
    // left, right
    for (let i = 0; i < m; i++) {
        curr[i][0]++;
        curr[i][n - 1]++;
    }
};

const fillCurr = (curr, prev, m, n) => {
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let result = 0;
            if (i > 0) result += prev[i - 1][j];
            if (i < m - 1) result += prev[i + 1][j];
            if (j > 0) result += prev[i][j - 1];
            if (j < n - 1) result += prev[i][j + 1];
            curr[i][j] = result % (10 ** 9 + 7);
        }
    }
};

const addToCumulative = (curr, cumulative, m, n) => {
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            cumulative[i][j] += curr[i][j];
            cumulative[i][j] %= (10 ** 9 + 7);
        }
    }
};
