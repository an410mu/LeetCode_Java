class Solution {
    public List<List<Integer>> threeSum(int[] nums) {
        
        List<List<Integer>> output= new ArrayList<>();
        Arrays.sort(nums);
        System.out.println(Arrays.toString(nums));
        for (int i = 0; i < nums.length - 2; i++) {
            if (i > 0 && nums[i] == nums[i - 1]) {
                continue;
            } else {
                //find the combo 
                int left = i + 1;
                int right = nums.length - 1;
                while (left < right) {
                    if (nums[i] + nums[left] + nums[right] == 0) {
                        output.add(Arrays.asList(nums[i], nums[left], nums[right]));
                        left++;
                        right--;
                        while (left < right && nums[left] == nums[left - 1]) {
                            left++;
                        }
                        while (left < right && nums[right] == nums[right + 1]) {
                            right--;
                        }
                    } else if (nums[left]+nums[right]>-nums[i]) {
                        right--;
                    } else {
                        left++;
                    }
                }
            }
        }

        return output;
    }
}