/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findFrequentTreeSum = function(root) {
    const frequency = {};
    let maxFrequency = 0;
    
    const recursiveFunc = (node) => {
        if (node === null) {
            return 0;
        }
        
        const leftSum = recursiveFunc(node.left);
        const rightSum = recursiveFunc(node.right);
        const nodeSum = leftSum + rightSum + node.val;
        
        frequency[nodeSum] = (frequency[nodeSum] || 0) + 1;
        
        if (frequency[nodeSum] > maxFrequency) {
            maxFrequency = frequency[nodeSum];
        }
        
        return nodeSum;
    }
    
    recursiveFunc(root);
    
    const result = [];
    
    for (let k in frequency) {
        if (frequency[k] === maxFrequency) {
            result.push(parseInt(k));
        }
    }
    
    return result;
};