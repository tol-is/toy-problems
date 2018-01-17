/**
 * Definition for singly-linked list with a random pointer.
 * function RandomListNode(label) {
 *     this.label = label;
 *     this.next = this.random = null;
 * }
 */

/**
 * @param {RandomListNode} head
 * @return {RandomListNode}
 */
var copyRandomList = function(head) {
    if (!head) return null;
    
    let iter = head;
    while (iter) {
        const { label, next } = iter;
        iter.next = new RandomListNode(label);
        iter.next.next = next;    
        iter = next;
    }
    
    iter = head;
    while (iter) {
        const copy = iter.next;
        const originalRand = iter.random;
        if (originalRand) copy.random = originalRand.next;
        iter = copy.next;
    }
    
    iter = head;
    const newHead = iter.next;
    let newIter = newHead;
    while (iter) {
        iter.next = iter.next.next;
        newIter.next = newIter.next && newIter.next.next;
        iter = iter.next;
        newIter = newIter.next;
    }
    
    return newHead;
};
