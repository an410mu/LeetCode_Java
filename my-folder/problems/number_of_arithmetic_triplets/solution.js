/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function(nums, diff) {
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        let left = i + 1
        let right = nums.length - 1
        while(left < right) {
            if ((nums[left] - nums[i]) === diff && (nums[right] - nums[left] === diff)) {
                count++
                left++
                right--
            } else if ((nums[left] - nums[i]) < diff ) {
                left++
            } else {
                right--
            }
        }
           
    }
    return count
};