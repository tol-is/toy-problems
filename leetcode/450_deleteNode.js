/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if (!root) return null;

    if (root.val < key) {
        root.right = deleteNode(root.right, key);
        return root;
    }
    
    if (root.val > key) {
        root.left = deleteNode(root.left, key);
        return root;
    }
    
    if (!root.left) return root.right;
    if (!root.right) return root.left;

    if (!root.left.right) {
        root.left.right = root.right;
        return root.left;
    }

    let newRootParent = root.left;
    while (newRootParent.right.right) newRootParent = newRootParent.right;
    const newRoot = newRootParent.right;
    newRootParent.right = newRoot.left;
    newRoot.right = root.right;
    newRoot.left = root.left;
    
    return newRoot;
};
