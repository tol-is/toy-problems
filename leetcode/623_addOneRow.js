/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
var addOneRow = function(root, v, d, branch = 'left') {
    if (d === 1) {
        const newRoot = new TreeNode(v);
        newRoot[branch] = root;
        return newRoot;
    }
    
    if (!root) return null;
    
    root.left = addOneRow(root.left, v, d - 1, 'left');
    root.right = addOneRow(root.right, v, d - 1, 'right');
    
    return root;
};
