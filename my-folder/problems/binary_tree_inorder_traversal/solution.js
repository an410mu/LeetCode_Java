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
var inorderTraversal = function(root) {
    let output = []
    
    const dfs = root => {
        if (root !== null) {
            dfs(root.left)
            output.push(root.val)
            dfs(root.right)
        }
    }
    dfs(root)
    return output
};