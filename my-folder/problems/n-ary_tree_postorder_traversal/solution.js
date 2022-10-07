/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function(root) {
    let output =[]
    const dfs = root => {
        if (root !== null) {
            for (let child of root.children) {
                dfs(child)
            }
            output.push(root.val)
        }
    }
    dfs(root)
    return output
};