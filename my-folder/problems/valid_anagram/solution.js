/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

   let objs = {}
   let objt = {}
    if (s.length !== t.length) {
        return false;
    }   
   for (let char of s) {
       objs[char] = objs[char] === undefined ? 1 : objs[char]+=1
   }
    for (let char of t) {
        objt[char] = objt[char] === undefined ? 1 : objt[char]+=1
    }
    for (let key in objs) {
        if (objs[key] !== objt[key]) {
            return false;
        }
    }
    return true;
};