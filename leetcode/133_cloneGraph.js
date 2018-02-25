/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
var cloneGraph = function(graph) {
    if (!graph) return null;
    const nodes = {};
    const result = addNodes(graph, nodes);
    addEdges(graph, nodes, new Set());
    return result;
};

const addNodes = ({ label, neighbors }, nodes) => {
    if (nodes[label]) return;
    const newNode = new UndirectedGraphNode(label);
    nodes[label] = newNode;
    for (let neighbor of neighbors) addNodes(neighbor, nodes);
    return newNode;
};

const addEdges = ({ label, neighbors }, nodes, visited) => {
    if (visited.has(label)) return;
    visited.add(label);
    const node = nodes[label];
    for (let neighbor of neighbors) {
        node.neighbors.push(nodes[neighbor.label]);
        addEdges(neighbor, nodes, visited);
    }
};
