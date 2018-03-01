/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const preHead = new ListNode();
    let node = preHead;
    let carry = false;
    
    while (l1 && l2) {
        const sum = l1.val + l2.val + (carry ? 1 : 0);
        node.next = new ListNode(sum % 10);
        carry = sum >= 10;
        
        l1 = l1.next;
        l2 = l2.next;
        node = node.next;
    }
    
    let remainingList = null;
    if (l1) remainingList = l1;
    else if (l2) remainingList = l2;
    
    while (remainingList) {
        const sum = remainingList.val + (carry ? 1 : 0);
        node.next = new ListNode(sum % 10);
        carry = sum >= 10;
        
        remainingList = remainingList.next;
        node = node.next;
    }
    
    if (carry) node.next = new ListNode(1);
    
    return preHead.next;
};
