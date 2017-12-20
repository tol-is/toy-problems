export function findSuccessor(node) {
  if (!node) throw new Error('node cannot be null');

  if (node.right) {
    let currentNode = node.right;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.val;
  } else if (node.parent) {
    if (node.parent.left === node) return node.parent.val;

    let currentNode = node.parent;
    while (currentNode.parent) {
      if (currentNode.parent.left === currentNode) return currentNode.parent.val;
      currentNode = currentNode.parent;
    }
  }
  return undefined;
}
