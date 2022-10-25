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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    let allPath = []
    let curPath = []
    findPath(root, targetSum, curPath, allPath)
    console.log(allPath)
    return allPath
};

const findPath = (cur, targetSum, curPath, allPath) => {
    if (!cur) return 
    
    curPath.push(cur.val)
    //console.log(curPath, targetSum)
    if (cur.val === targetSum && !cur.left && !cur.right) {
        allPath.push([...curPath])
    } else {
        findPath(cur.left, targetSum - cur.val, curPath, allPath)
        findPath(cur.right, targetSum - cur.val, curPath, allPath)
    }
    
    curPath.pop()
    
}