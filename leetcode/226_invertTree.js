/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) return root;
    
    const result = new TreeNode(root.val);
    if (root.right) result.left = invertTree(root.right);
    if (root.left) result.right = invertTree(root.left);
    
    return result;
};
