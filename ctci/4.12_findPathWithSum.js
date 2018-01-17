export function findPathWithSum(tree, value) {
  if (!tree || !tree.root) throw new Error('tree must be valid and non-empty');

  const sumSoFar = [0];
  const sumCount = { 0: 1 };

  const recurse = (node) => {
    let result = 0;

    const prevSum = sumSoFar[sumSoFar.length - 1];
    const currSum = prevSum + node.val;

    sumSoFar.push(currSum);
    sumCount[currSum] = (sumCount[currSum] || 0) + 1;
    const remaining = currSum - value;

    result += (sumCount[remaining] || 0);
    if (node.left) result += recurse(node.left);
    if (node.right) result += recurse(node.right);

    sumCount[sumSoFar.pop()] -= 1;

    return result;
  };

  return recurse(tree.root);
}
