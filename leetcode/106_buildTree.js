/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    const n = inorder.length;
    const inOrderIndices = getIndices(inorder);
    
    const recurse = (inLo, inHi, postLo, postHi) => {
        if (inLo > inHi) return null;
        
        const rootVal = postorder[postHi];
        const rootInOrderIndex = inOrderIndices[rootVal];
        const leftSize = rootInOrderIndex - inLo;
        
        const root = new TreeNode(rootVal);
        root.left = recurse(inLo, rootInOrderIndex - 1, postLo, postLo + leftSize - 1);
        root.right = recurse(rootInOrderIndex + 1, inHi, postLo + leftSize, postHi - 1);
        
        return root;
    };
    
    return recurse(0, n - 1, 0, n - 1);
};

const getIndices = (arr) => {
    const result = {};
    for (let i = 0; i < arr.length; i++) {
        result[arr[i]] = i;
    }
    return result;
};
