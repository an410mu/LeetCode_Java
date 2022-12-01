/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let output = []
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            continue
        } else {
            find(nums, nums[i], output, i + 1)
        }
    }
    return output
};

const find = (nums, target, output, left) => {
    let right = nums.length - 1
    while(left < right) {
        let curSum =  nums[left] + nums[right]
        if (curSum + target === 0) {
            output.push([target, nums[left], nums[right]])
            left++
            right--
        
            while(left > 0 && nums[left] === nums[left - 1]) {
                left++
            }
            while(right > 0 && nums[right] === nums[right + 1]) {
                right--
            }
        } else if(curSum < -target) {
            left++
        } else {
            right--
        }
        
    }
}