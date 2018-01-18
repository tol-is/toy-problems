/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    const n = gas.length;
    const balance = [];
    for (let i = 0; i < n; i++) {
        balance[i] = gas[i] - cost[i];
    }
    
    let p1 = 0;
    let p2 = 0;
    let total = balance[p1];
    
    while (true) {
        if (p2 - p1 + 1 === n && total >= 0) return p1;
        if (p1 >= n || p2 >= 2 * n) return -1;
        
        if (total < 0) {
            total -= balance[p1];
            p1 += 1;
            if (p1 > p2) {
                p2 = p1;
                total = balance[p1];
            }
        } else {
            p2 += 1;
            total += balance[p2 % n];
        }
    }
};
