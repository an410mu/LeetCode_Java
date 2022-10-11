/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    //initalize max, and curSum to track each subarray
    //if curSum < 0, reset to zero for the subarray
    let max = nums[0]
    let curSum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (curSum < 0 ) curSum = 0
        curSum += nums[i]
        max = Math.max(max, curSum)
    }
    return max
};