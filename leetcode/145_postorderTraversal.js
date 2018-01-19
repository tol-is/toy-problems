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
var postorderTraversal = function(root) {
    if (!root) return [];
    
    const stack = [[false, root]];
    const result = [];
    
    let tuple;
    while (tuple = stack[stack.length - 1]) {
        const [processed, node] = tuple;
        if (processed || (!node.left && !node.right)) {
            result.push(node.val);
            stack.pop();
        } else {
            tuple[0] = true;
            if (node.right) stack.push([false, node.right]);
            if (node.left) stack.push([false, node.left]);
        }
    }
    
    return result;
};
