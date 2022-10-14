/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let min = Infinity;
    nums.sort((a,b) => a-b)
    for (let i = 0; i < nums.length - 2; i++){
        let left = i + 1
        let right = nums.length - 1
        while(left < right) {
            let curSum = nums[i] + nums[left]
            targetDiff = target - nums[i] - nums[left] - nums[right]
            if (targetDiff === 0) {
                return target
            } else if (Math.abs(targetDiff) < Math.abs(min) || (Math.abs(targetDiff) > Math.abs(min) && Math.abs(targetDiff) === Math.abs(min))) {
                min = targetDiff
            }
            
            if (targetDiff > 0) {
                left++
            } else {
                right--
            }
            
        }
    }
    return target - min
};