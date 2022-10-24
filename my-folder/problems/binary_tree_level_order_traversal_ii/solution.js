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
var levelOrderBottom = function(root) {
    let queue = []
    let output = []
    if (!root) return output
    queue.push(root)
    while (queue.length !== 0) {
        let level = []
        let limit = queue.length
        for (let i = 0; i < limit; i++) {
            let node = queue.shift()
            if (node) level.push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        output.unshift(level)
    }
    return output
};