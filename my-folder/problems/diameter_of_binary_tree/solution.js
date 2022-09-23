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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let dia = 0
    var find = root => {
        if (!root) {
            return 0
        }
        let left = find(root.left)
        let right = find(root.right)
        dia = Math.max(dia, left + right)
        return 1 + Math.max(left, right)
    }
    
    find(root)
    return dia
        
    
};