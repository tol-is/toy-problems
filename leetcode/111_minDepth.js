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
var minDepth = function(root) {
    const queue = [];
    
    let [node, level] = [root, 1];
    while (node) {
        if (node.left === null && node.right === null) {
            return level;
        }
        if (node.left) {
            queue.push([node.left, level + 1]);
        }
        if (node.right) {
            queue.push([node.right, level + 1]);
        }
        [node, level] = queue.shift();
    }
    
    return 0;
};