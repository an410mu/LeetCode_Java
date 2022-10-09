/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function(nums) {
    let left = 0
    let obj = {}
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]] !== undefined) {
            //update left 
            left = Math.max(left, obj[nums[i]] + 1)
        }
        obj[nums[i]] = i
        let temp = findSum(nums, left, i)
        console.log(left, i)
        sum = Math.max(sum, temp)
    }
    return sum
};

const findSum = (nums, start, end) => {
    let sum = 0;
    for (let i = start; i <=end; i++) {
        sum += nums[i]
    }
    return sum;
}