/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function(root) {
    let output = []
    const dfs = root => {
        if (root !== null) {
            output.push(root.val)
            for (let child of root.children) {
                dfs(child )
            }
        }
    }
    dfs(root)
    return output
};