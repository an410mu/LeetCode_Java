/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    //create ojb to check occurance
    
    let max = 0
    let left = 0
    let obj = {}
    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]] !== undefined) {
            left = Math.max(left, 1 +obj[s[i]] )
        }
        obj[s[i]] = i
        max = Math.max(max, i - left + 1)
    }
    return max;
};


