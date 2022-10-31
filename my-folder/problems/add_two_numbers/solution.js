/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
 let output = new ListNode()
 let carry = 0
 let cur = output
 while(l1 || l2 || carry){
     let v1 = l1.val || 0
     let v2 = l2.val || 0
     console.log([v1, v2])
     let curSum = v1 + v2 + carry
     carry = curSum >= 10 ? 1 : 0
     let node = new ListNode(curSum % 10)
     cur.next = node
     cur = cur.next
     l1 = l1.next || 0
     l2 = l2.next || 0
 }
    return output.next
};