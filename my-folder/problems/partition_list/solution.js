/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let cur = head;
    let left = null;
    let right = null;
    let leftTail = null;
    let rightTail = null

    while (cur) {
        let newNode = new ListNode(cur.val);
        if (cur.val < x) {
            if(!left) {
                left = newNode;
                leftTail = newNode;
            } else {
                leftTail.next = newNode;
                leftTail = newNode
            }
        } else {
            if (!right) {
                right = newNode;
                rightTail = newNode
            } else {
                rightTail.next = newNode;
                rightTail = newNode
            }
        }
        cur = cur.next;
    }
    
    if (leftTail) {
        leftTail.next = right
        return left;
    } else {
        return right;
    }
    
};