/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    const result = [];
    
    const recurse = (node) => {
        if (!node) {
            result.push(null);
        } else {
            result.push(node.val);
            recurse(node.left);
            recurse(node.right);
        }
    };
    recurse(root);
    
    return JSON.stringify(result);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    const recurse = (vals) => {
        const val = vals.shift();
        const node = val === null ? null : new TreeNode(val);
        
        if (node) {
            node.left = recurse(vals);
            node.right = recurse(vals);
        }
        
        return node;
    }
    
    return recurse(JSON.parse(data));
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
 