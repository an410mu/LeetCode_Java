/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    var old = s + s;
    if(s === goal || (s.length === goal.length && old.indexOf(goal) !== -1)){
        return true;
    }else{
        return false;
    }
    
};