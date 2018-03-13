/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    const n = getLen(head);
    k = k % n;
    
    if (k === 0 || n === 0) return head;
    
    let p1 = head;
    let p2 = head;
    while (k > 0) {
        p2 = p2.next;
        k--;
    }
    
    while (p2.next) {
        p1 = p1.next;
        p2 = p2.next;
    }
    
    p2.next = head;
    const newHead = p1.next;
    p1.next = null;
    
    return newHead;
};

const getLen = (node) => {
    let result = 0;
    while (node) {
        node = node.next;
        result++;
    }
    return result;
};
