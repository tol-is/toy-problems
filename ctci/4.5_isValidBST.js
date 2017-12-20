export function isValidBST(tree) {
  if (!tree) throw new Error('invalid tree');

  const recursiveFunc = (node, min = Number.NEGATIVE_INFINITY, max = Number.POSITIVE_INFINITY) => {
    if (!node) return true;
    if (node.val < min || node.val > max) return false;
    return recursiveFunc(node.left, min, node.val) && recursiveFunc(node.right, node.val, max);
  };

  return recursiveFunc(tree.root);
}
