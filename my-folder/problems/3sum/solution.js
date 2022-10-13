/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let output = []
    nums.sort((a, b) => a -b)
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue
        }
        //find sum
        //console.log([nums[i], 'find'])
        findSum(nums, nums[i], i + 1, output)
    }
    return output
}

const findSum = (nums, target, left, output) => {
    let right = nums.length - 1
    while (left < right) {
        sum = nums[left] + nums[right]
        if (sum === -target) {
            output.push([target, nums[left], nums[right]])
            left++
            right--
            while(left > 0 && nums[left] === nums[left - 1]) {
                left++
            }
            while(right > 0 && nums[right] === nums[right + 1]){
                right--
            }
        } else if (sum > -target) {
            right--
        } else {
            left++
        }

    }
  
    
}