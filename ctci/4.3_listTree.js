export function listTree(tree) {
  const result = [];

  const recursiveFunc = (node, depth) => {
    if (!result[depth]) result[depth] = new LinkedList();
    result[depth].append(node.val);
    if (node.left) recursiveFunc(node.left, depth + 1);
    if (node.right) recursiveFunc(node.right, depth + 1);
  };

  if (tree.root) recursiveFunc(tree.root, 0);

  return result;
}
