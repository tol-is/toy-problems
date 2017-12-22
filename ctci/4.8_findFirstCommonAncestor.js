export function findFirstCommonAnscestor(node1, node2) {
  if (!node1 || !node2) throw new Error('node1 and node2 must both be valid nodes');
  if (node1 === node2) return node1.val;

  let parent1 = node1;
  while (parent1.parent) parent1 = parent1.parent;
  let parent2 = node2;
  while (parent2.parent) parent2 = parent2.parent;

  if (parent1 !== parent2) return null;

  let result;

  const recursiveFunc = (node) => {
    if (result) return 0;
    if (!node) return 0;

    const left = recursiveFunc(node.left);
    if (result) return 0;

    const right = recursiveFunc(node.right);
    if (result) return 0;
    
    const current = (node === node1 || node === node2) ? 1 : 0;

    const total = left + right + current;
    if (total === 2) result = node;
    return total;
  };

  recursiveFunc(parent1);

  return result.val;
}
