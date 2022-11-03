/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let obj = {
        2 : 'abc',
        3 : 'def',
        4: 'ghi',
        5 :'jkl',
        6 :'mno',
        7 : 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    }
    let output = []
    const find = (i, cur) => {
        cur = cur || ''
        if (cur.length === digits.length) {
            return output.push(cur)
        }
        let letter = obj[digits[i]].split('')
        letter.forEach (ele => {
            find (i + 1, cur + ele)
        })
    }
    if (digits) find(0, '')
    return output
};










