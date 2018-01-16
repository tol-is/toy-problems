export function findPathWithSum(tree, value) {
  if (!tree || !tree.root) throw new Error('tree must be valid and non-empty');

  let result = 0;

  const recursive = (node, targets) => {
    for (let target of targets) {
      if (node.val === target) result += 1;
    }

    const newTargets = targets.map(n => n - node.val);
    newTargets.push(value);

    if (node.left) recursive(node.left, newTargets);
    if (node.right) recursive(node.right, newTargets);
  };

  recursive(tree.root, [value]);
  return result;
}
