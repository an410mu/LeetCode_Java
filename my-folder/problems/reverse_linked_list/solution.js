/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let output = new ListNode()
    let stack = []
    let cur = head
    while(cur) {
        stack.push(cur.val)
        cur = cur.next
    }
    console.log(stack)
    let tail = output;
    while(stack.length > 0) {
        let node = new ListNode(stack.pop())
        tail.next = node
        tail = tail.next
    }
    return output.next 
};