/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    //iterate nums, skip if i = i - 1
    //calculate cur sum with two pointers by iterate the rest of array 
    // if diff is min, store into output 
    
    let output = 0
    let min = Infinity
    nums.sort ((a,b) => a- b)
    for (let i = 0; i < nums.length; i++) {
        let left = i + 1
        let right = nums.length - 1
        let curSum = 0
        while(left < right) {
            curSum = nums[i] + nums[left] + nums[right]
            let diff = target - curSum
            if (diff === 0) {
                return curSum
            } else if (Math.abs(diff) < Math.abs(min) || Math.abs(diff) > Math.abs(min) && Math.abs(diff) === Math.abs(min)) {
                min = diff
            }
            
            if (diff > 0) {
                left++
            } else {
                right--
            }
            
        }
    }
    return target - min
};