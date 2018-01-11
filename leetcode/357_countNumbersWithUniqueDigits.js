/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n0) {
    const used = new Set();
    let count = 0;
    
    const recursiveFunc = (n) => {
        if (n === 0) {
            // console.log(Array.from(used).toString());
            count += 1;
            return;
        }
        
        for (let i = 0; i <= 9; i++) {
            if (used.has(i)) continue;
            if (!(used.size === 0 && i === 0)) used.add(i);
            recursiveFunc(n - 1);
            used.delete(i);
        }
    }
    recursiveFunc(n0);
    
    return count;
};
