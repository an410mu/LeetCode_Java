/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let obj = {}
    for (let num of nums) {
        obj[num] = obj[num] === undefined ? 1 : obj[num] + 1
        if (obj[num] > 1) {
            return true
        }
    }
    return false;
};