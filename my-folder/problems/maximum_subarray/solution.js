/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let cur = 0
    let max = nums[0]
    for (let num of nums) {
        if (cur < 0) cur = 0
        cur += num
        max = Math.max(cur, max)
    }
    return max
 
};