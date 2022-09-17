/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

var findAnagrams = function(s, p) {
    let output = []
    let pCount = {}
    let sCount = {}
    for (let char of p) {
        pCount[char] = pCount[char] === undefined ? 1 :pCount[char] + 1
    }
    for (let i = 0; i < p.length; i++) {
        sCount[s[i]] = sCount[s[i]] === undefined ? 1 : sCount[s[i]] + 1
    }
    
    if (checkObj(sCount, pCount)) {
        output.push(0)
    }
    
    let left = 0
    for (let i = p.length; i < s.length; i++) {
        //console.log([sCount,pCount])
        sCount[s[i]] = sCount[s[i]] === undefined ? 1 : sCount[s[i]] + 1
        sCount[s[left]] -= 1;
        if (sCount[s[left]] === 0) {
            delete sCount[s[left]]
        }
        left += 1
        if (checkObj(sCount, pCount)) {
            output.push(left)
        }
    }
    return output;
    
}

var checkObj = function (a, b) {
    for (let key in a) {
        if (a[key] !== b[key]) {
            return false
        }
    }
    return true;
}





//time out 
// var findAnagrams = function(s, p) {
//     let output = []
//     for (let i = 0; i < s.length; i++) {
//         let substring = s.slice(i, i + p.length)
//         if (isAnagram(substring, p)) {
//             output.push(i)
//         }
//     }
//     return output
// };

// var isAnagram = function(a, b) {
//     let obj = {}
//     if (a.length !== b.length) return false
//     for (let char of b) {
//         obj[char] = obj[char] === undefined ? 1 : obj[char] + 1
//     }
//     for (let char of a) {
//         if (obj[char] && obj[char] > 0) {
//             obj[char] = obj[char] - 1
//         } else {
//             return false;
//         }
//     }
//     return true
// }
