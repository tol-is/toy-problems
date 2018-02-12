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
var countNodes = function(root, leftLevel = null, rightLevel = null) {
    if (!root) return 0;
    
    if (leftLevel === null) {
        leftLevel = -1;
        let leftNode = root;
        while (leftNode) {
            leftLevel += 1;
            leftNode = leftNode.left;
        }
    }
    if (rightLevel === null) {
        rightLevel = -1;
        let rightNode = root;
        while (rightNode) {
            rightLevel += 1;
            rightNode = rightNode.right;
        }
    }
    
    if (leftLevel === rightLevel) return Math.pow(2, leftLevel + 1) - 1;
    return 1 + countNodes(root.left, leftLevel - 1, null) + countNodes(root.right, null, rightLevel - 1);
};
