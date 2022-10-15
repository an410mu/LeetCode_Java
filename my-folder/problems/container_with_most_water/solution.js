/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    
    let l = 0, r = height.length-1;
    let output = 0
    while(l < r) {
        output = Math.max(Math.min(height[l], height[r]) * (r - l), output)
        if (height[l] < height[r]) {
            l++
        } else {
            r--
        }
    }
    return output 
};