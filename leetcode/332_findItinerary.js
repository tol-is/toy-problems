/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    const graph = {};
    const count = tickets.length;
    
    for (let [from, to] of tickets) {
        if (!graph[from]) graph[from] = [[], []];
        graph[from][0].push(to);
        graph[from][1].push(false);
    }
    
    for (let from in graph) {
        graph[from][0].sort();
    }
    
    return dfs(graph, 'JFK', count, ['JFK'])
};

const dfs = (graph, from, count, results) => {
    if (count === 0) return results;
    if (!graph[from]) return null;
    
    const [tos, visited] = graph[from];
    for (let i = 0; i < tos.length; i++) {
        if (visited[i]) continue;
        visited[i] = true;
        results.push(tos[i]);
        if (dfs(graph, tos[i], count - 1, results)) return results;
        results.pop();
        visited[i] = false;
    }
    return null;
};
