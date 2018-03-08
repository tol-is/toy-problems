/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root, lo = Number.NEGATIVE_INFINITY, hi = Number.POSITIVE_INFINITY) {
    if (!root) return true;
    if (root.val < lo || root.val > hi) return false;
    return (!root.left || isValidBST(root.left, lo, root.val - 1)) && (!root.right || isValidBST(root.right, root.val + 1, hi));
};
