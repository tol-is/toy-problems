/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum, sums = [sum]) {
    if (!root) return 0;
    
    let count = 0;
    for (let i = 0; i < sums.length; i++) {
        const s = sums[i];
        if (root.val === s) count += 1;
        sums[i] -= root.val;
    }
    
    if (root.left) count += pathSum(root.left, sum, [sum].concat(sums));
    if (root.right) count += pathSum(root.right, sum, [sum].concat(sums));
    
    return count;
};
