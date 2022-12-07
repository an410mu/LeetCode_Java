/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let letter = /[^A-Za-z0-9]/g
    s = s.toLowerCase().replace(letter, '')
        console.log(s)
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== s[s.length-1-i]) {
            return false
        }
    }
    return true; 
};