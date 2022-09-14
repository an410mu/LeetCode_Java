/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let obj = {}
    for (let i = 0; i < magazine.length; i++) {
        obj[magazine[i]] = obj[magazine[i]] === undefined ? 1 :  obj[magazine[i]]+1
    }
    
    for (let char of ransomNote) {
        if (obj.hasOwnProperty(char)) {
            obj[char] -= 1;
        } else {
            return false
        }
        if (obj[char] < 0) {
            return false
        }
    }
    return true
};