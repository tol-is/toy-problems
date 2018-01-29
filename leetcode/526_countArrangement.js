/**
 * @param {number} N
 * @return {number}
 */
var countArrangement = function(N, num = 1, seq = [], validSlots = getValidSlots(N)) {
    if (num > N) return 1;
    
    let count = 0;
    for (let i of validSlots[num]) {
        if (seq[i] === undefined) {
            seq[i] = num;
            count += countArrangement(N, num + 1, seq, validSlots);
            seq[i] = undefined;
        }
    }
    return count;
};

const isDivisible = (i, j) => i % j === 0 || j % i === 0;

const getValidSlots = (n) => {
    const result = [];
    for (let i = 1; i <= n; i++) {
        result[i] = [];
        for (let j = 1; j <= n; j++) {
            if (isDivisible(i, j)) result[i].push(j);
        }
    }
    return result;
};
