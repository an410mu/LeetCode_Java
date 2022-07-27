/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    
    let long, short;
    let lengthA = getLength(headA);
    let lengthB = getLength(headB);
    if (lengthA > lengthB) {
        long = headA;
        short = headB;
    } else {
        long = headB;
        short = headA;
    }
    
    let diff = Math.abs(lengthA - lengthB);
    while (long && short) {
        if (diff > 0) {
            long = long.next;
            diff--;
            continue;
        }
        if (long === short) {
            return long
        } else {
            long = long.next;
            short = short.next;
        }
    }
    return null;
};

var getLength = function(head) {
    if(head.next === null) {
        return 1;
    } else {
        return 1 + getLength(head.next)
    }
}