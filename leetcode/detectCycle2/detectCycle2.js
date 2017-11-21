function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if (head === null) {
        return null;
    }
    
    let startPointer = head;
    let slowPointer = head;
    let fastPointer = head;

    if (head && head.next) {
        fastPointer = head.next;
    } else {
        return null;
    }
    
    while (true) {
        if (fastPointer.next === null) {
            return null;
        }
        
        if (slowPointer === fastPointer) {
            break;
        } else {
            slowPointer = slowPointer.next;
            fastPointer = fastPointer.next.next;
            
            if (!slowPointer || !fastPointer) {
                return null;
            }
        }
    }
    
    while (true) {
        if (startPointer === slowPointer) {
            return startPointer;
        }
        
        fastPointer = fastPointer.next;
        
        while (fastPointer !== slowPointer) {
            if (fastPointer === startPointer) {
                return startPointer;
            }
            fastPointer = fastPointer.next;
        }
        startPointer = startPointer.next;
    }
};