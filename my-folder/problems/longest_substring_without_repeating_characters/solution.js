/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
 let letter = {}
 let max = 0
 let left = 0
 for (let i = 0; i < s.length; i++) {
     if (letter[s[i]] !== undefined) {
         //move left index
         left = Math.max(left, letter[s[i]] + 1)
     }
     
     //store index 
     letter[s[i]] = i
     max = Math.max(max, i - left + 1)
 }
 return max 
};