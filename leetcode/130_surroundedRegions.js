/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    if (board.length === 0) return;
    
    const n = board.length;
    const m = board[0].length;
    
    const Os = new Set();
    for (let i = 0; i < n; i++) {
        dfs(i, 0, board, Os);
        dfs(i, m - 1, board, Os);
    }
    
    for (let j = 0; j < m; j++) {
        dfs(0, j, board, Os);
        dfs(n - 1, j, board, Os);
    }
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            const stringifiedCoords = stringifyCoords(i, j);
            if (!Os.has(stringifiedCoords)) board[i][j] = 'X';
        }
    }
};

const stringifyCoords = (i, j) => `${i},${j}`;

const parseCoords = str => str.split(',').map(e => parseInt(e));

const outOfRange = (i, j, board) => i < 0 || j < 0 || i >= board.length || j >= board[0].length;

const dfs = (i, j, board, Os) => {
    const stringifiedCoords = stringifyCoords(i, j);
    if (outOfRange(i, j, board) || Os.has(stringifiedCoords) || board[i][j] === 'X') return;
    
    Os.add(stringifiedCoords);
    dfs(i - 1, j, board, Os);
    dfs(i + 1, j, board, Os);
    dfs(i, j - 1, board, Os);
    dfs(i, j + 1, board, Os);
};
