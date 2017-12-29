/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k, targets = new Set()) {
    if (!root) return false;
    
    if (targets.has(root.val)) return true;
    
    targets.add(k - root.val);
    
    if (root.left) {
        if (findTarget(root.left, k, targets)) return true;
    }
    
    if (root.right) {
        if (findTarget(root.right, k, targets)) return true;
    }
    
    return false;
};
