/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    people.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]);
    const list = new LinkedList();
    
    for (let p of people) {
        list.insertAtIndex(p, p[1]);
    }
    
    return list.toArray();
};

class LinkedList {
    constructor() {
        this.head = null;
    }
    
    insertToHead(val) {
        const node = new ListNode(val);
        node.next = this.head;
        this.head = node;
    }
    
    insertAtIndex(val, index) {
        let node = this.head;
        
        while (index > 1) {
            node = node.next;
            index -= 1;
        }
        
        if (index === 0) this.insertToHead(val);
        else this.insertAfter(val, node);
    }
    
    insertAfter(val, targetNode) {
        const node = new ListNode(val);
        node.next = targetNode.next;
        targetNode.next = node;
    }
    
    toArray() {
        const result = [];
        let node = this.head;
        while (node) {
            result.push(node.val);
            node = node.next;
        }
        return result;
    }
}

class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
