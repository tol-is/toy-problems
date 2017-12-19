export function isBalanced(tree) {
  if (!tree || !tree.root) return true;
  return getDepth(tree.root, 0) !== Number.MIN_VALUE;
}

const getDepth = (node, depth) => {
  if (!node) return depth - 1;

  const leftDepth = getDepth(node.left, depth + 1);
  const rightDepth = getDepth(node.right, depth + 1);

  const isUnbalanced = leftDepth === Number.MIN_VALUE || 
    rightDepth === Number.MIN_VALUE || 
    Math.abs(leftDepth - rightDepth) > 1;

  if (isUnbalanced) return Number.MIN_VALUE;
  return Math.max(leftDepth, rightDepth);
};
