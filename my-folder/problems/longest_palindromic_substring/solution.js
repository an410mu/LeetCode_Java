/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let output = ''
    let length = 0
    for (let i = 0; i < s.length; i++) {
        let left = i, right = i
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            if (right - left + 1 > length) {
                output = s.slice(left, right + 1)
                length = right - left + 1
            }
            left--
            right++
        }
    }
    
    for (let i = 0; i < s.length; i++) {
        let left = i, right = i+1
        while (left >= 0 && right < s.length && s[left] === s[right]){
            if (right - left + 1 > length) {
                output = s.slice(left, right + 1)
                length = right - left + 1
            }
            left--
            right++
        }
    }
    return output
};


