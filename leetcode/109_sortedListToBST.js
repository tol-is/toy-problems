/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    const nodes = [];
    while (head) {
        nodes.push(head);
        head = head.next;
    }
    
    return makeTree(nodes, 0, nodes.length - 1);
};

const makeTree = (arr, lo, hi) => {
    if (hi < lo) return null;
    
    const mid = Math.floor((hi + lo) / 2);
    const tree = new TreeNode(arr[mid].val);
    tree.left = makeTree(arr, lo, mid - 1);
    tree.right = makeTree(arr, mid + 1, hi);
    
    return tree;
};
