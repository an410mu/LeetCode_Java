class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        dic = {}
        for i in range(0,len(nums)):
            dic[nums[i]]= i
        for i in range(0,len(nums)):
            complement = target - nums[i]
            if complement in dic and dic[complement]!=i:
                return [i,dic[complement]]
        