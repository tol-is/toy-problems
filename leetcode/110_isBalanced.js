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
var isBalanced = function(root) {
    const depth = getDepth(root);
    return depth >= 0;
};

const getDepth = (node) => {
    if (!node) return 0;
    
    const left = getDepth(node.left);
    const right = getDepth(node.right);
    
    if (left < 0 || right < 0 || Math.abs(left - right) > 1) return -1;
    return 1 + Math.max(left, right);
};
