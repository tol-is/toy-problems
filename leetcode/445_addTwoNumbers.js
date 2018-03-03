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
    const s1 = getStack(l1);
    const s2 = getStack(l2);
    
    let node = null;
    let carry = 0;
    
    while (s1.length || s2.length) {
        const sum = (s1.pop() || 0) + (s2.pop() || 0) + carry;
        const digit = sum % 10;
        carry = Math.floor(sum / 10);
        
        const nextNode = new ListNode(digit);
        nextNode.next = node;
        node = nextNode;
    }
    
    if (carry) {
        const nextNode = new ListNode(1);
        nextNode.next = node;
        node = nextNode;
    }
    
    return node;
};
    
const getStack = (list) => {
    const stack = [];
    while (list) {
        stack.push(list.val);
        list = list.next;
    }
    return stack;
};
