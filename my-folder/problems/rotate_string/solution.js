/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    var old = s + s;
    return  (s === goal || (s.length === goal.length && old.indexOf(goal) !== -1))?true:false;
  
    
};