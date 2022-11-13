/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    nums.sort((a,b) => a -b)
    let output = []
    find(nums, 0, [], output)
    return output
};

const find = (nums, index, cur, output) => {
    output.push(Array.from(cur))
    for (let i = index; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            cur.push(nums[i])
            find(nums, i+1, cur, output)
            cur.pop()
        }
    }
}