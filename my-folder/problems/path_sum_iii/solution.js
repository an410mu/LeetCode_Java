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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    
    let myMap = new Map ([[0, 1]])
    let curSum = 0
    let output = 0;
    
    const dfs = root => {
        if (!root) return 
        curSum += root.val
        if (myMap.has(curSum - targetSum)) {
            output += myMap.get(curSum - targetSum)
        }
        
        myMap.set(curSum, (myMap.get(curSum) || 0) + 1)
        dfs(root.left)
        dfs(root.right)
        myMap.set(curSum, myMap.get(curSum) - 1)
        curSum -= root.val
    }
    
    dfs(root)
    return output 
};
