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
var widthOfBinaryTree = function(root) {
    const leftMost = [];
    const rightMost = [];
    
    const recursiveFunc = (node, pos, depth) => {
        if (!leftMost[depth] || pos < leftMost[depth]) leftMost[depth] = pos;
        if (!rightMost[depth] || pos > rightMost[depth]) rightMost[depth] = pos;
        
        if (node.left) recursiveFunc(node.left, pos * 2 + 1, depth + 1);
        if (node.right) recursiveFunc(node.right, pos * 2 + 2, depth + 1);
    }
    
    recursiveFunc(root, 0, 0);
    
    let maxWidth = 1;
    for (let i = 0; i < leftMost.length; i++) {
        const width = rightMost[i] - leftMost[i] + 1;
        if (width > maxWidth) maxWidth = width;
    }
    return maxWidth;
};