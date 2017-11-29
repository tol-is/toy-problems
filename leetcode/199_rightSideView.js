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
var rightSideView = function(root) {
    if (root === null) {
        return [];
    }
    
    const queue = [[root, 0]];
    const result = [];
    
    let element = queue.shift();
    while (element) {
        let node = element[0];
        let depth = element[1];
        if (queue.length === 0 || queue[0][1] !== depth) {
            result.push(node.val);
        }
        if (node.left) {
            queue.push([node.left, depth + 1]);
        }
        if (node.right) {
            queue.push([node.right, depth + 1]);
        }
        element = queue.shift();
    }
    
    return result;
};