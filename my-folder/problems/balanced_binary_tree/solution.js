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
 * @return {boolean}
 */
var isBalanced = function(root) {

    const findHeight = node => {
        if (!node) return 0
        let left = findHeight(node.left)
        let right = findHeight(node.right)
        if (left === false || right === false || Math.abs(left - right) > 1) {return false}
        return 1 + Math.max(left, right)
    }
    return findHeight(root) !== false
}