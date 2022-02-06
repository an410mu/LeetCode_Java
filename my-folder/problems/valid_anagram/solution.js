/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    
    if(sortter(s) === sortter(t)){
        return true;
    }else {
        return false;
    }
    
};

function sortter(str){
    return str.split("").sort().join("");
}