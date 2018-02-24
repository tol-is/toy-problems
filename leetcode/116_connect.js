/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
    let levelHead = root;
    let node;
    
    while (levelHead) {
        node = levelHead;
        while (node && node.left) {
            node.left.next = node.right;
            if (node.next) node.right.next = node.next.left;
            node = node.next;
        }
        levelHead = levelHead.left;
    }
};
