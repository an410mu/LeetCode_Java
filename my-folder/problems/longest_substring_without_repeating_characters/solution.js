/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    //create ojb to check occurance
    //create left pointer, 
    let max = 0;
    let obj = {};
    let left = 0
    for (let i = 0 ; i < s.length; i++) {
        if (obj[s[i]] !== undefined) {
            left = Math.max(left, obj[s[i]] + 1)
        }
        obj[s[i]] = i
        max = Math.max(max, i - left + 1)
    }
    return max
};