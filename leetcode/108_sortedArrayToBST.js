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
var sortedArrayToBST = function(nums, lo = 0, hi = nums.length - 1) {
    if (nums.length === 0) return null;
    
    const mid = Math.floor((lo + hi) / 2);
    
    const tree = new TreeNode(nums[mid]);
    if (mid - 1 >= lo) tree.left = sortedArrayToBST(nums, lo, mid - 1);
    if (mid + 1 <= hi) tree.right = sortedArrayToBST(nums, mid + 1, hi);
    
    return tree;
};
