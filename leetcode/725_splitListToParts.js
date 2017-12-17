/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} root
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(root, k) {
    const len = getListLength(root);
    const base = Math.floor(len / k);
    const hasExtra = len % k;
    
    const result = [];
    let node = root;
    let count = 0;
    
    while (node) {
        if (count === 0) result.push(node);
        count += 1;

        const sectionLength = base + (result.length <= hasExtra ? 1 : 0);
        if (count === sectionLength) {
            count = 0;
            let tmp = node;
            node = node.next;
            tmp.next = null;
        } else {
            node = node.next;
        }
        
    }
    
    for (let i = result.length; i < k; i++) {
        result.push(null);
    }
    
    return result;
};

const getListLength = (root) => {
    let count = 0;
    let node = root;
    while (node) {
        count += 1;
        node = node.next;
    }
    return count;
}
