/**
 * @param {number[][]} M
 * @return {number}
 */

var findCircleNum = function(M) {
    const visited = new Set();
    const queue = [];
    const n = M.length;
    
    let result = 0;
    
    for (let i = 0; i < n; i++) {
        if (visited.has(i)) {
            continue;
        }
        
        searchFrom(M, i, visited);
        result += 1;
    }
    
    return result;
};

const searchFrom = (M, i, visited) => {
    const queue = [];
    let current = i;
    
    while (current !== undefined) {
        visited.add(current);
        for (let j = 0; j < M.length; j++) {
            if (M[current][j] && !visited.has(j)) {
                queue.push(j);
            }
        }
        current = queue.shift();
    }
};
