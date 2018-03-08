/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    const stack = [];
    for (let num of nums) {
        const newNode = new TreeNode(num);
        let currNode = null;
        let nextNode = stack[stack.length - 1];
        
        while (nextNode && nextNode.val < num) {
            nextNode.right = currNode;
            currNode = stack.pop();
            nextNode = stack[stack.length - 1];
        }
        
        newNode.left = currNode;
        stack.push(newNode);
    }
    
    for (let i = stack.length - 1; i >= 1; i--) {
        stack[i - 1].right = stack[i];
    }
    
    return stack[0];
};
