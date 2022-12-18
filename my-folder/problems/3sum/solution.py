class Solution:

    
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        output = []
        nums.sort()
        for i in range(0, len(nums) - 2):
            if i > 0 and nums[i] == nums[i - 1]:
                continue
            else:
                self.find(nums, nums[i], i + 1, output )
        return output


    def find(self, nums, target, left, output):
        right = len(nums) - 1
        while left < right:
            sum = nums[left] + nums[right]
            if target + sum == 0:
                output.append([target, nums[left], nums[right]])
                left += 1
                right -= 1
                while left < right and nums[left] == nums[left - 1]:
                    left += 1
                while left < right and nums[right] == nums[right + 1]:
                    right -= 1
            elif sum < - target:
                left += 1
            else:
                right -= 1

                