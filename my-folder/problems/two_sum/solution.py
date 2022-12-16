class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """

        obj = {}
        for i in range(len(nums)):
            if (target - nums[i] in obj):
                return [obj[target - nums[i]], i]
            else:
                obj[nums[i]] = i