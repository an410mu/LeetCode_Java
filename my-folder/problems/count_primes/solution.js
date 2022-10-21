/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let arr = new Array(n).fill(false)
    if (n < 2) return 0
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (arr[i] === false) {
            for (let j = i * i; j < n; j+=i) {
                arr[j] = true
            }
        }
    }
    let count = 0
    for (let ele of arr) {
        if (ele === false) {
            count++
        }
    }
    console.log(arr)
    return count - 2
};
    

//too slow
// const isPrime = num => {
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false
//     }
//     return num > 1
// }

