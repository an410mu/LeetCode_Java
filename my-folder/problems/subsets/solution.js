/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    
    let output = []
    find (nums, 0, [], output)
    return output
};

const find = (nums, index, cur, output) => {
    output.push(Array.from(cur))
    for (let i = index; i < nums.length; i++) {
        if (i === index || nums[i] !== nums[i - 1]) {
            cur.push(nums[i])
            find(nums, i + 1, cur, output)
            cur.pop()
        }
    }
}