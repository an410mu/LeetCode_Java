class Solution:
    def threeSumClosest(self, nums: List[int], target: int) -> int:
        nums.sort()
        min = 1000000000
        output = 0
        for i in range(len(nums)- 2):
                left = i + 1
                right = len(nums) - 1
                while left < right: 
                    sum = nums[i] + nums[left] + nums[right]
                    diff = target - sum
                    if diff == 0:
                        return sum
                    elif abs(diff) < abs(min) or abs(diff) > abs(min) and abs(diff) == abs(min):
                        min = diff
                    
                    if diff > 0:
                        left += 1
                    else:
                        right -= 1
        return target - min