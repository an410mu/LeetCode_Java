/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = nums[0];
    //iterate array
    //form subarray for each index
    //compare with max 
    let curSum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (curSum < 0) {curSum = 0;}
        curSum += nums[i]
        max = Math.max(curSum, max)
    }
    return max; 
};