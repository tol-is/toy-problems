/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    const graph = makeGraph([beginWord, ...wordList]);
    
    if (!graph[endWord]) return 0;
    
    const visitedFromStart = {};
    const visitedFromEnd = {};
    const queueFromStart = [[beginWord, 1]];
    const queueFromEnd = [[endWord, 1]];
    
    let word;
    let length;
    let level = 1;
    
    while (queueFromStart.length > 0 && queueFromEnd.length > 0) {
        while (queueFromStart.length > 0 && level === queueFromStart[0][1]) {
            [word, length] = queueFromStart.shift();

            if (visitedFromEnd[word]) return length + visitedFromEnd[word] - 1;
            visitedFromStart[word] = length;

            for (let nextWord of graph[word]) {
                if (!visitedFromStart[nextWord]) queueFromStart.push([nextWord, length + 1]);
            }
        }
        
        while (queueFromEnd.length > 0 && level === queueFromEnd[0][1]) {
            [word, length] = queueFromEnd.shift();

            if (visitedFromStart[word]) return length + visitedFromStart[word] - 1;
            visitedFromEnd[word] = length;

            for (let nextWord of graph[word]) {
                if (!visitedFromEnd[nextWord]) queueFromEnd.push([nextWord, length + 1]);
            }
        }
        
        level += 1;
    }
    return 0;
};

const makeGraph = (list) => {
    const graph = {};
    for (let w1 of list) {
        graph[w1] = [];
        for (let w2 of list) {
            if (differByOne(w1, w2)) graph[w1].push(w2);
        }
    }
    return graph;
};

const differByOne = (w1, w2) => {
    let differCount = 0
    for (let i = 0; i < w1.length; i++) {
        if (w1[i] !== w2[i]) differCount += 1;
        if (differCount > 1) return false;
    }
    return differCount === 1;
};
