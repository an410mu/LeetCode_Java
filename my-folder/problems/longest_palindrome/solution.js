/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let obj = {}
    for (let char of s) {
        obj[char] = obj[char] === undefined ? 1 : obj[char] + 1
    }
    let output = 0;
    let odd = 0
    for (let key in obj) {
        if (obj[key] % 2 === 0) {
            output += obj[key]
        } else {
            output += obj[key] - 1
            odd += 1
        }
    }
    
    if (odd > 0) {
        return output + 1
    } else {
        return output
    }
};

