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
var largestValues = function(root) {
    const result = [];
    
    const recursiveFunc = (node, depth) => {
        if (result[depth] === undefined || node.val > result[depth]) {
            result[depth] = node.val;
        }
        if (node.left) {
            recursiveFunc(node.left, depth + 1);
        }
        if (node.right) {
            recursiveFunc(node.right, depth + 1);
        }
    }
    
    if (root !== null) {
        recursiveFunc(root, 0);
    }
    
    return result;
};