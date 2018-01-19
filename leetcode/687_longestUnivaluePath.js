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
var longestUnivaluePath = function(root) {
    if (!root) return 0;
    
    const recurse = (node) => {
        if (!node) return [0, 0, 0];
        
        let longestFromSelfOneSide = 1;
        let longestFromSelfTwoSides = 1;
        let longestFromAny = 1;
        
        if (node.left) {
            const leftResult = recurse(node.left);
            longestFromAny = Math.max(longestFromAny, ...leftResult);
            if (node.val === node.left.val) {
                longestFromSelfOneSide = Math.max(longestFromSelfOneSide, leftResult[0] + 1);
                longestFromSelfTwoSides += leftResult[0];
            }
        }
        
        if (node.right) {
            const rightResult = recurse(node.right);
            longestFromAny = Math.max(longestFromAny, ...rightResult);
            if (node.val === node.right.val) {
                longestFromSelfOneSide = Math.max(longestFromSelfOneSide, rightResult[0] + 1);
                longestFromSelfTwoSides += rightResult[0];
            }
        }
        
        return [longestFromSelfOneSide, longestFromSelfTwoSides, longestFromAny];
    }
    
    const nodeResult = recurse(root);
    return Math.max(nodeResult[0], nodeResult[1], nodeResult[2]) - 1;
};
