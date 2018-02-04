/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    const n = preorder.length;
    const inorderIndices = {};
    for (let i = 0; i < n; i++) {
        inorderIndices[inorder[i]] = i;
    }
    
    const recurse = (preLo, preHi, inLo, inHi) => {
        if (preHi < preLo) return null;
        
        const rootVal = preorder[preLo];
        const root = new TreeNode(rootVal);
        
        const rootIndex = inorderIndices[rootVal]
        const leftSize = rootIndex - inLo;
        
        root.left = recurse(preLo + 1, preLo + leftSize, inLo, rootIndex - 1);
        root.right = recurse(preLo + leftSize + 1, preHi, rootIndex + 1, inHi);
        
        return root;
    };
    
    return recurse(0, n - 1, 0, n - 1);
};
