export function isValidBST(tree) {
  if (!tree) throw new Error('invalid tree');

  return getBSTInfo(tree.root)[0];
}

const getBSTInfo = (node) => {
  const result = [true, node.val, node.val];

  if (node.left) {
    const leftResult = getBSTInfo(node.left);
    if (!leftResult[0] || leftResult[2] > node.val) result[0] = false;
    result[1] = leftResult[1];
  }

  if (!result[0]) return result;

  if (node.right) {
    const rightResult = getBSTInfo(node.right);
    if (!rightResult[0] || rightResult[1] < node.val) result[0] = false;
    result[2] = rightResult[2];
  }

  return result;
};
