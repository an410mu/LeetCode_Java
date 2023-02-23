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
    public boolean isEvenOddTree(TreeNode root) {
        Queue<TreeNode> queue = new LinkedList<>();
        int level = 0;
        int prev = 0;
        queue.add(root);
        while (!queue.isEmpty()) {
            int size = queue.size();
            for (int i = 0; i < size; i++) {
                TreeNode cur = queue.poll();
                //check odd, even
                if (level % 2 == 0 && (cur.val % 2 == 0 || (i > 0 && cur.val <= prev))) {
                    return false;
                }
                if (level % 2 != 0 && (cur.val % 2 != 0 || (i > 0 && cur.val >= prev))) {
                    return false;
                }

                //add child back to queue
                if (cur.left != null) {
                    queue.add(cur.left);
                }
                if (cur.right != null) {
                    queue.add(cur.right);
                }
                prev = cur.val;
            }
            level++;
        }
        return true;
    }

}