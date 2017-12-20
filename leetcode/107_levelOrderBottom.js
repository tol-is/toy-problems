/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    const results = [];
    if (!root) return results;
    
    let currentLevel = [root];
    let nextLevel;
    
    while (currentLevel.length) {
        nextLevel = [];
        for (let node of currentLevel) {
            if (node.left) nextLevel.push(node.left);
            if (node.right) nextLevel.push(node.right);
        }
        results.unshift(currentLevel.map((n => n.val)));
        currentLevel = nextLevel;
    }
    
    return results;
};
