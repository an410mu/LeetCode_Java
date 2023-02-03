class Solution {
    public int threeSumClosest(int[] nums, int target) {
        //iterate the entire nums array
        //set two pointer, left start from i + 1 and right from the end
        //traverse the element between left right pointer find the sum 
        //if diff betweeen sum and target is smallest, set it as output
        Arrays.sort(nums);
        int res = 0;
        int min = 1000000; 
        int diff;
        for (int i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] == nums[i - 1]) {
                continue; //avoid duplicate
            } else {
                int left = i + 1;
                int right = nums.length - 1;
                while (left < right) {
                    int sum = nums[i] + nums[left] + nums[right];
                    diff = sum - target;
                    if (diff == 0) {
                        return sum;
                    } else if (Math.abs(diff) < Math.abs(min) || (Math.abs(diff) > Math.abs(min) && Math.abs(diff)==Math.abs(min))) {
                        min = diff;
                    }
                    
                    if (diff > 0) {
                        right--;
                    } else {
                        left++;
                    }
                }
            }
        }
        return target + min;
    }
}