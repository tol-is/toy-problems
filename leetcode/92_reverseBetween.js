/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    let beforeRev = null;
    let afterRev = null;
    let headOfRev = null;
    let tailOfRev = null;
    
    let p1 = head;
    let p2 = null;
    let p3 = null;
    
    while (m > 1) {
        if (m === 2) beforeRev = p1;
        p1 = p1.next;
        m--;
        n--;
    }
    
    tailOfRev = p1;
    p2 = p1.next;
    if (p2) p3 = p2.next;
    
    while (n > 1) {
        p2.next = p1;
        p1 = p2;
        p2 = p3;
        if (p3) p3 = p3.next;
        n--;
    }
    
    headOfRev = p1;
    afterRev = p2;
    
    if (beforeRev) {
        beforeRev.next = headOfRev;
    } else {   
        head = headOfRev;
    }
    
    tailOfRev.next = afterRev;
    
    return head;
};
