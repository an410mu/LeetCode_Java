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
var preorderTraversal = function(root) {
    let output = []
    const dfs = root => {
        if (root !== null) {
            output.push(root.val)
            dfs(root.left)
            dfs(root.right)
        }
    }
    dfs(root)
    return output
};