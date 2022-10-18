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
var levelOrder = function(root) {
    let output = []
    let queue = []
    queue.push(root)
    while (queue.length !== 0) {
        let level = []
        let len = queue.length
        for(let i = 0; i < len; i++) {
            let node = queue.shift()
            if (node) {
                level.push(node.val)
                queue.push(node.left)
                queue.push(node.right)
            }
        }
        if (level.length !== 0) {
            output.push(level)
        }
        
    }
    return output
};