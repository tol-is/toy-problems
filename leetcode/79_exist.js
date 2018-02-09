/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const visited = [];
    for (let i = 0; i < board.length; i++) {
        visited[i] = [];
    }
    
    const recurse = (i, j, index) => {
        visited[i][j] = true;
        
        if (board[i][j] === word[index]) {
            if (index === word.length - 1) return true;
            
            if (!outOfRange(board, i - 1, j) && !visited[i - 1][j]) {
                if (recurse(i - 1, j, index + 1)) return true;
            }
            if (!outOfRange(board, i + 1, j) && !visited[i + 1][j]) {
                if (recurse(i + 1, j, index + 1)) return true;
            }
            if (!outOfRange(board, i, j - 1) && !visited[i][j - 1]) {
                if (recurse(i, j - 1, index + 1)) return true;
            }
            if (!outOfRange(board, i, j + 1) && !visited[i][j + 1]) {
                if (recurse(i, j + 1, index + 1)) return true;
            }
        }
        
        visited[i][j] = false;
        
        return false;
    };
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (word[0] === board[i][j]) {
                if (recurse(i, j, 0)) return true;
            }
        }
    }
    
    return false;
};

const outOfRange = (board, i, j) => i < 0 || j < 0 || i >= board.length || j >= board[0].length;
