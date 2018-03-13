/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const remaining = new Set();
    for (let i = 0; i < numCourses; i++) remaining.add(i);
    
    const graph = makeGraph(prerequisites);
    
    const results = [];
    
    for (let i = 0; i < numCourses; i++) {
        if (remaining.has(i)) {
            if (!dfs(i, graph, remaining, new Set(), results)) return [];
        }
    }
    
    return results;
};

const makeGraph = (prereqs) => {
    const graph = {};
    
    for (let [from, to] of prereqs) {
        if (!graph[from]) graph[from] = [];
        graph[from].push(to);
    }
    
    return graph;
};

const dfs = (from, graph, remaining, visited, results) => {
    if (visited.has(from)) return false;
    visited.add(from);
    
    if (graph[from]) {
        for (let to of graph[from]) {
            if (remaining.has(to)) {
                if (!dfs(to, graph, remaining, visited, results)) return false;
            }
        }
    }
    remaining.delete(from);
    results.push(from);
    
    return true;
};
