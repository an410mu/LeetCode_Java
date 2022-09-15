/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 1
        let right = n
       
       if (n === 1) return 1
        
        while(right >= left) {
            let mid = Math.floor((left + right)/2)
            if (isBadVersion(mid) === true && isBadVersion(mid) !== isBadVersion(mid - 1)) {
                return mid
            } else if (isBadVersion(mid) === false) {
                left = mid + 1
            } else if (isBadVersion(mid) === true) {
                right = mid -1
            }
        }
    };
};