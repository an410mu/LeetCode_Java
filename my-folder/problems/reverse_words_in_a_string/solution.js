/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let revStr = s.trim().replace(/  +/g, ' ')
    let revArr = revStr.split('').reverse()
    //console.log(revArr)
    let left = 0
    for (let i = 0; i < revArr.length; i++) {
        if (revArr[i + 1] === ' ' || i + 1 === revArr.length) {
            flip(revArr, left, i)
            left = i + 2
        }
    }
    return revArr.join('')
};

const flip = (arr, start, end) => {
    while(start < end) {
        let temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp
        start++
        end--
    }
    return arr
}