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
 * @return {number[]}
 */
var rightSideView = function(root) {
    let output = []
    let queue = []
    if (!root) {
        return output
    } else {
        queue.push(root)
    }
    while (queue.length !== 0) {
        let limit = queue.length 
        let level = []
        for (let i = 0; i < limit; i++) {
            let node = queue.shift()
            if (node) level.push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        output.push(level[level.length - 1])
    }
    return output
};