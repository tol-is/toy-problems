/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    const preHead = new ListNode(0);
    preHead.next = head;
    
    const store = [];
    
    let node = preHead;
    while (node) {
        store.push(node);
        node = node.next;
    }
    
    const len = store.length;
    
    if (len === 2) return null;
    
    store[len - n - 1].next = store[len - n].next;
    
    return preHead.next;
};
