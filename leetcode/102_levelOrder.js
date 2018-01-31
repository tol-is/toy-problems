/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root, level = 0, result = []) {
    if (!root) return result;

    if (!result[level]) result[level] = [];
    result[level].push(root.val);

    level += 1;
    if (root.left) levelOrder(root.left, level, result);
    if (root.right) levelOrder(root.right, level, result);
    
    return result;
};
