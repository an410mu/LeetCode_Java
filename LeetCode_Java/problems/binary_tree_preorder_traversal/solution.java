/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public List<Integer> preorderTraversal(TreeNode root) {
        List<Integer> output = new ArrayList<>();
        dfs(root, output);
        return output;
    }

    public void dfs(TreeNode root, List output) {
        if (root == null) {
            return;
        }
        output.add(root.val);
        dfs(root.left, output);
        dfs(root.right, output);
    }
}