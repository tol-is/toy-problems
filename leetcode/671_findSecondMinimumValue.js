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
var findSecondMinimumValue = function(root) {
    const recur = (root) => {
        if (root.left) {
            // has two children
            if (root.left.val === root.right.val) {
                return Math.min(recur(root.left), recur(root.right));
            } else {
                const sameNode = root.left.val === root.val ? root.left : root.right;
                const diffNode = root.left.val === root.val ? root.right : root.left;
                return Math.min(recur(sameNode), diffNode.val);
            }

        } else {
            // has no children
            return Number.POSITIVE_INFINITY;
        }
    }
    
    const result = recur(root);
    if (result === Number.POSITIVE_INFINITY) {
        return -1;
    } else {
        return result;
    }
};
