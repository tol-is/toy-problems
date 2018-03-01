/**
 * @param {number[]} machines
 * @return {number}
 */
var findMinMoves = function(machines) {
    const total = machines.reduce((n, acc) => n + acc);
    
    if (total % machines.length !== 0) {
        return -1;
    }
    
    const average = total / machines.length;
    
    let maxOperations = 0;
    
    const delta = machines.map((n) => {
        const result = n - average;
        maxOperations = Math.max(maxOperations, result);
        return result;
    });
    
    let balance = 0;
    let currentOperations = 0;
    for (let d of delta) {
        balance += d;
        maxOperations = Math.max(maxOperations, Math.abs(balance));
    }
    
    return maxOperations;
};