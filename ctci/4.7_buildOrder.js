export function buildOrder(projects, dependencies) {
  const graph = {};

  projects.forEach(project => graph[project] = []);
  dependencies.forEach(([from, to]) => graph[JSON.stringify(from)].push(to));

  const result = [];
  const set = new Set();

  let changed = true;
  while (changed) {
    changed = false;
    for (let from in graph) {
      const edges = graph[from];
      while (edges.length && set.has(edges[0])) {
        edges.shift();
      }
      if (!edges.length) {
        result.push(JSON.parse(from));
        set.add(JSON.parse(from));
        delete graph[from];
        changed = true;
      }
    }
  }

  if (Object.keys(graph).length) throw new Error('dependencies are cyclic');
  return result;
}
