/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    //iterate longer string 
    //if both 1, both 0,  1&0
    let carry = 0
    let output = []
    let i = a.length - 1
    let j = b.length -1
    while( i >= 0 || j >=0) {
        let one = Number(a[i]) || 0
        let two = Number(b[j]) || 0
        let digit = one + two + carry
        carry = digit>=2 ? 1 : 0
        output.unshift(digit%2)
        i--;
        j--;
    }

    if (carry) {
        output.unshift(1)
        return output.join('')
    }

    return output.join('')
};