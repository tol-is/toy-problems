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
var maxPathSum = function(root) {
    let max = Number.NEGATIVE_INFINITY;
    
    const recurse = (node) => {
        if (!node) return 0;
        
        const left = Math.max(0, recurse(node.left));
        const right = Math.max(0, recurse(node.right));
        
        max = Math.max(max, left + right + node.val);
        return Math.max(left + node.val, right + node.val);
    };
    recurse(root);
    
    return max;
};
