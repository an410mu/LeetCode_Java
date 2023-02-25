class Solution {
    public int jump(int[] nums) {
        int left = 0;
        int right = 0;
        int count = 0;
        while (right < nums.length - 1) {
            int maxJump = 0;
            for (int i = left; i < right + 1; i++) {
                maxJump = Math.max(maxJump, nums[i]+i);
            }
            left = right + 1;
            right = maxJump;
            count++;
        }
        return count;
    }
}