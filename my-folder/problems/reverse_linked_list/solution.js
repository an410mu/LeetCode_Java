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
    if (!head) {
        return null
    }
    
    let todo = head.next
    let newList = head
    newList.next = null  //1
    while(todo) {
        let temp = todo //2
        todo = todo.next //3
        temp.next = newList //2-1-null
        newList = temp
    }
    return newList
    
};