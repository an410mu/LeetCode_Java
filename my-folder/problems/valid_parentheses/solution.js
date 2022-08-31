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
    let bracket = {
        '(' : ')',
        '[' : ']',
        '{' : '}'
    }
    let heap = [];
    for (let i = 0; i < s.length; i++) {
        if (bracket[s[i]]) {
            heap.push(bracket[s[i]])
        } else {
            if (s[i] !== heap.pop()) {return false;}
        }
    }
    return !heap.length; 
};