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
var sumNumbers = function(root, acc = 0) {
    if (!root) return 0;
    
    acc = acc * 10 + root.val;
    if (!root.left && !root.right) return acc;
    return sumNumbers(root.left, acc) + sumNumbers(root.right, acc);
};
