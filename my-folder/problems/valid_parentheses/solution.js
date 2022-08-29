/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    //make an object to assign value for each parentheses
    //each pair of parenthese should cancel each other
    //iterate the string, and acummulate a total value 
    //check total value if 0 => true, else false 
    //check special case, total = 0 , but not in order 
    let total = 0;
    let inOrder = 0;
    let obj = {
        "(" : ")",
        "[" : "]",
        "{" :"}",

    }
   
    let heap = [];
    
    for (let char of s) {
        if (obj[char]) {
            heap.push(obj[char])
        } else {
            if (char !== heap.pop()) return false;
        }
    }
    return !heap.length
};