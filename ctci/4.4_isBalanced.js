export function isBalanced(tree) {
  if (!tree || !tree.root) return true;

  const depths = getDepthsArray(tree.root);

  for (let i = 1; i < depths.length; i += 2) {
    if (Math.abs(depths[i] - depths[i + 1]) > 1) return false;
  }
  return true;
}

const getDepthsArray = (node, depths = [], i = 0) => {
  if (!node) {
    depths[i] = getLevel(getParentIndex(i));
    return depths;
  }

  const left = getLeftIndex(i);
  const right = getRightIndex(i);

  getDepthsArray(node.left, depths, left);
  getDepthsArray(node.right, depths, right);

  depths[i] = Math.max(depths[left], depths[right]);
  return depths;
};

const getParentIndex = i => Math.floor((i - 1) / 2);
const getLevel = i => Math.floor(Math.log2(i + 1));
const getLeftIndex = i => i * 2 + 1;
const getRightIndex = i => i * 2 + 2;
