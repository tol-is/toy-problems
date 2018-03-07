/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(start, end, bank) {
    if (start === end) return 0;
    
    const graph = {};
    
    bank.push(start);
    let startI = bank.length - 1;
    let endI = null;
    
    for (let i = 0; i < bank.length; i++) {
        if (bank[i] === end) endI = i;
        if (bank[i] === start) continue;
        for (let j = i + 1; j < bank.length; j++) {
            if (hasOneDiff(bank[i], bank[j])) {
                addPath(graph, i, j);
                addPath(graph, j, i);
            }
        }
    }

    return biDirBFS(graph, startI, endI);
};

const biDirBFS = (graph, start, end) => {
    const set1 = new Set();
    const set2 = new Set();
    const queue1 = [[start, 0]];
    const queue2 = [[end, 0]];
    
    let currLevel = 0;
    
    while (queue1.length && queue2.length) {
        if (addLevelToSet(queue1, graph, currLevel, set1, set2)) return currLevel * 2 - 1;
        if (addLevelToSet(queue2, graph, currLevel, set2, set1)) return currLevel * 2;
        currLevel++;
    }
    return -1;
};

const addLevelToSet = (queue, graph, currLevel, set1, set2) => {
    let node = null;
    let level = null;
    
    while (queue.length && queue[0][1] === currLevel) {
        [node, level] = queue.shift();
        if (set2.has(node)) return true;
        set1.add(node);
        if (graph[node]) {
            for (let adjacent of graph[node]) {
                if (!set1.has(adjacent)) queue.push([adjacent, level + 1]);
            }
        }
    }
    return false;
};

const addPath = (graph, i, j) => {
    if (!graph[i]) graph[i] = [];
    graph[i].push(j);
};

const hasOneDiff = (a, b) => {
    let diff = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) diff++;
        if (diff > 1) return false;
    }
    return diff === 1;
};
