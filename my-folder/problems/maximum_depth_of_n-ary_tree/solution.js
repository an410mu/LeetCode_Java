/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) {
        return 0
    }
    let depth = 0
    console.log(root.children)
    for (let item of root.children) {
        if (item)
        depth = Math.max(depth, maxDepth(item))
    }
    return 1 + depth
    
};