/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = (root, acc = 0) => !root ? 0 : (!root.left && !root.right) ? acc * 10 + root.val : sumNumbers(root.left, acc * 10 + root.val) + sumNumbers(root.right, acc * 10 + root.val);
