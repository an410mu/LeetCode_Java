/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    let output = []
    if (!root) return output
    let queue = []
    queue.push(root)
    let zig = true
    while (queue.length !== 0) {
        let limit = queue.length
        let level = []
        //console.log(queue)
        for (let i = 0; i < limit; i++) {
            let node = queue.shift()
            if (node && zig === true) {
                level.push(node.val)
            } else if (node && zig === false) {
                level.unshift(node.val)
            }
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        output.push(level)
        zig = !zig
    }
    return output
    
};