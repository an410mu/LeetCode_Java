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
    
    re1 = change(l1)
    re2 = change(l2)
    let carry = 0
    let output = new ListNode()
    let cur = output
    while (re1 || re2 || carry) {
        let v1 = re1.val || 0
        let v2 = re2.val || 0
        let curSum = v1 + v2 + carry
        carry = curSum >= 10 ? 1 : 0
        let digit = curSum % 10
        cur.next = new ListNode(digit)
        cur = cur.next 
        re1 = re1.next || 0
        re2 = re2.next || 0
    }
    return change(output.next)
};

const change = node => {
    if (!node) return []
    let todo = node.next
    let output = node
    output.next = null
    while(todo) {
        let temp = todo
        todo = todo.next
        temp.next = output
        output = temp
    }
    return output
}

