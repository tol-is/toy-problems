/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (!root) return [];
    
    const queue = [[root, 0]];
    let e;
    let node;
    let depth;
    
    const result = [];
    
    while (e = queue.shift()) {
        [node, depth] = e;
        if (!result[depth]) result[depth] = [];
        
        if (depth % 2) result[depth].unshift(node.val);
        else result[depth].push(node.val);
        
        if (node.left) queue.push([node.left, depth + 1]);
        if (node.right) queue.push([node.right, depth + 1]);
    }
    
    return result;
};
