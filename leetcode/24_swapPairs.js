/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let newHead;
    let node;
    let tmp;
    
    // 0 or 1
    if (head === null || head.next === null) {
        return head;
    }
    
    // first two
    newHead = head.next;
    head.next = newHead.next;
    newHead.next = head;
    node = head;
    
    while (node.next && node.next.next) {
        tmp = node.next.next;
        node.next.next = tmp.next;
        tmp.next = node.next;
        node.next = tmp;
        node = tmp.next;
    }
    
    return newHead;
};