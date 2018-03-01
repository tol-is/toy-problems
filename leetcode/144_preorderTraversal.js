/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  const result = [];
  const stack = [root];
  
  let i = 0;
  let node = stack.pop();
  while (node) {
    result.push(node.val);
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      node = node.left;
    } else {
      node = stack.pop();
    }
  }
  
  return result;
};