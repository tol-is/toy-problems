/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const rows = [];
    const cols = [];
    const boxes = [];
    
    for (let i = 0; i < 9; i++) {
        rows.push(new Set());
        cols.push(new Set());
        boxes.push(new Set());
    }
    
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const num = board[i][j];
            if (num === '.') continue;
            
            if (rows[i].has(num)) return false;
            rows[i].add(num);
            
            if (cols[j].has(num)) return false;
            cols[j].add(num);
            
            const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            if (boxes[boxIndex].has(num)) return false;
            boxes[boxIndex].add(num);
        }
    }
    
    return true;
};
