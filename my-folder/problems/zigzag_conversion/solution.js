/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
 let output = ''
 if (numRows === 1) return s
 for (let r = 0; r < numRows; r++) {
     let increment = 2 * (numRows - 1)
     for (let i = r; i < s.length; i+=increment) {
         output += s[i]
         if (r > 0 && r < numRows - 1 && i + increment - 2*r < s.length) {
             output += s[i + increment - 2 * r]
        }
     }
 }
    return output
};


