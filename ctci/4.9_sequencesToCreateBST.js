export function sequencesToCreateBST(tree) {
  if (!tree || !tree.root) return null;

  const graph = makeGraph(tree.root);
  const visited = new Set();
  const results = [];

  const recursiveFunc = (node, acc) => {
    visited.add(node);

    const nextLevel = getNextLevel(graph, visited);

    if (nextLevel.length === 0) {
      results.push(acc.concat([node]));
      visited.delete(node);
      return;
    }

    for (let nextNode of nextLevel) {
      if (!visited.has(nextNode)) {
        recursiveFunc(nextNode, acc.concat([node]));
      }
    }

    visited.delete(node);
  };

  visited.add(tree.root.val);
  recursiveFunc(tree.root.val, []);

  return results;
}

const makeGraph = (node) => {
  let graph = {};
  graph[node.val] = [];
  
  if (node.left) {
    graph[node.val].push(node.left.val);
    graph = Object.assign({}, graph, makeGraph(node.left));
  }

  if (node.right) {
    graph[node.val].push(node.right.val);
    graph = Object.assign({}, graph, makeGraph(node.right));
  }

  return graph;
};

const getNextLevel = (graph, visited) => {
  const nextLevel = [];

  for (let node of visited) {
    for (let toNode of graph[node]) {
      if (!visited.has(toNode)) {
        nextLevel.push(toNode);
      }
    }
  }

  return nextLevel;
};
