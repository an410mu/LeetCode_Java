/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    
    //iterate the array check if arr[i] < arr[i + 1], if not count+1
     //if count > 1 return false
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
            count++
        }
        if (count > 1) return false
        if (nums[i] < nums[i - 2] && nums[i + 1] < nums[i - 1]) return false
    }
    
    return true
};