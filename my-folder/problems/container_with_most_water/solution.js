/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    
  let area = 0
  let left = 0
  right = height.length - 1
    while (left < right) {
        area = Math.max( Math.min(height[left], height[right]) * (right - left), area)
        if (height[left] > height[right]) {
            right--
        } else {
            left++
        } 
    }
    return area
};