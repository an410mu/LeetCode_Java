/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var array = x.toString().split("");
    var output = []
    for (var i=array.length; i>=0; i--){
        output.push(array[i]);
    }
    var actual = Number(output.join(""));
    if(actual === x){
        return true;
    }else{
        return false;
    }
    
};