/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    //create ojb to check occurance
    let obj = {}
    let left = 0
    let longest = 0
    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]] !== undefined) {
            left = Math.max (left, obj[s[i]] + 1)
        } 
            obj[s[i]] = i
            longest = Math.max(longest, i - left + 1)
    
    }
    return longest
};


