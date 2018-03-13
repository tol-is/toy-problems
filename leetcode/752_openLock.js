/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    target = parseInt(target);
    const deadendsSet = new Set();
    for (let deadend of deadends) deadendsSet.add(parseInt(deadend));
    
    if (deadendsSet.has(0)) return -1;
    
    const visited = new Set();
    const queue = [[0, 0]];
    
    let tuple = null;
    while (tuple = queue.shift()) {
        const [combo, level] = tuple;

        const nextCombos = getNextCombo(combo);
        for (let nextCombo of nextCombos) {
            if (nextCombo === target) return level + 1;
            if (!deadendsSet.has(nextCombo) && !visited.has(nextCombo)) queue.push([nextCombo, level + 1]);
            visited.add(nextCombo);
        }
    }
    
    return -1;
};

const getNextCombo = (combo) => {
    let results = [];
    for (let i = 1; i <= 1000; i *= 10) {
        const up = (combo % (i * 10) >= 9 * i) ? combo - 9 * i : combo + i;
        const down = (combo % (i * 10) < i) ? combo + 9 * i : combo - i;
        results.push(up, down);
    }
    return results;
};
