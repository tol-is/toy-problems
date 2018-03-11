/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    const n = getLen(head);
    if (n < 3) return;
    
    const tail = reverse(split(head, Math.floor(n / 2)));
    merge(head, tail);
};

const getLen = (node) => {
    let result = 0;
    while (node) {
        result += 1;
        node = node.next;
    }    
    return result;
};

const split = (node, n) => {
    while (n > 0) {
        node = node.next;
        n--;
    }
    const result = node.next;
    node.next = null;
    return result;
};

const reverse = (node) => {
    let p1 = null;
    let p2 = node;
    let p3 = null;
    
    while (p2) {
        p3 = p2.next;
        p2.next = p1;
        p1 = p2;
        p2 = p3;
    }
    
    return p1;
};

const merge = (node1, node2) => {
    while (node1 && node2) {
        const next1 = node1.next;
        const next2 = node2.next;
        
        node1.next = node2;
        node2.next = next1;
        
        node1 = next1;
        node2 = next2;
    }
};
