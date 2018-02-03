/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const rows = [];
    const cols = [];
    const boxes = [];
    
    for (let i = 0; i < 9; i++) {
        rows.push(0);
        cols.push(0);
        boxes.push(0);
    }
    
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const num = parseInt(board[i][j]);
            if (isNaN(num)) continue;
            
            if (rows[i] & (1 << num)) return false;
            rows[i] |= (1 << num);
            
            if (cols[j] & (1 << num)) return false;
            cols[j] |= (1 << num);
            
            const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            if (boxes[boxIndex] & (1 << num)) return false;
            boxes[boxIndex] |= (1 << num);
        }
    }
    
    return true;
};
