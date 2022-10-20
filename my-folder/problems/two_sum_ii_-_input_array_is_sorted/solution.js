/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    
    let right = numbers.length - 1
    let left = 0
    while (left < right) {
        let curSum = numbers[left] + numbers[right]
        if (curSum === target) {
            return [left + 1, right + 1]
        } else if (curSum > target) {
            right--
        } else {
            left++
        }
    }
};