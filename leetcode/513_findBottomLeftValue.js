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
var findBottomLeftValue = function(root) {
    const queue = [[root, 0]];
    
    let node;
    let depth;
    let e;
    
    let lastVal;
    
    while (e = queue.shift()) {
        [node, depth] = e;
        lastVal = node.val;
        
        if (node.right) queue.push([node.right, depth + 1]);
        if (node.left) queue.push([node.left, depth + 1]);
    }
    
    return lastVal;
};
