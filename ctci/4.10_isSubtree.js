export function isSubtree(tree1, tree2) {
  if (!tree1 || !tree1.root) throw new Error('trees1 must be valid non-empty trees');
  if (!tree2 || !tree2.root) return true;

  const str1 = stringifyTree(tree1.root).join(',');
  const str2 = stringifyTree(tree2.root).join(',');
  return str1.indexOf(str2) >= 0;
}

const stringifyTree = (node) => {
  if (node === null) return ['null'];
  return [node.val.toString()].concat(stringifyTree(node.left)).concat(stringifyTree(node.right));
};
