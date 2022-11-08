/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let output = []
    const find = (nums, cur, index) => {
        if (cur.length === nums.length) {
            output.push(cur)
            return
        }

        for (let i = 0; i < cur.length + 1; i++) {
            let newCur = cur.slice(0)
            newCur.splice (i, 0, nums[index])
            find(nums, newCur, index + 1)
        }
    }
    find (nums, [], 0)
        return output
};