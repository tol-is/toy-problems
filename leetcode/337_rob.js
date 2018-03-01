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
var rob = function(root, i = 1, take = [], leave = []) {
    if (root === null) {
        return 0;
    }

    let takeLeft = 0;
    let leaveLeft = 0;
    let takeRight = 0;
    let leaveRight = 0;
    
    if (root.left) {
        rob(root.left, i * 2, take, leave);
        takeLeft = take[i * 2];
        leaveLeft = leave[i * 2];
    }
    if (root.right) {
        rob(root.right, i * 2 + 1, take, leave);
        takeRight = take[i * 2 + 1];
        leaveRight = leave[i * 2 + 1];
    }
    
    take[i] = leaveLeft + leaveRight + root.val;
    leave[i] = Math.max(takeLeft, leaveLeft) + Math.max(takeRight, leaveRight);
    
    return Math.max(take[i], leave[i]);
};