export function makeBalancedTree(arr) {
  const result = new Tree();
  if (arr && arr.length) {
    addToTree(result, arr, 0, arr.length - 1);
  }
  return result;
}

const addToTree = (tree, arr, lo, hi) => {
  const mid = Math.floor((hi + lo) / 2);
  tree.add(arr[mid]);
  if (mid > lo) addToTree(tree, arr, lo, mid - 1);
  if (mid < hi) addToTree(tree, arr, mid + 1, hi);
};
