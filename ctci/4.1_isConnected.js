export function isConnected(graph, source, target) {
  const queue = [];
  const visited = new Set();

  let node = source;
  while (node) {
    if (node === target) return true;
    visited.add(node);
    for (let child of graph[node]) {
      !visited.has(node) && queue.push(child);
    }
    node = queue.shift();
  }
  return false;
}
