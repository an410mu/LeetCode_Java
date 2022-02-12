/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
    var dic = {
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
    };
    
    var output = 0;
    for(var i=0; i<s.length; i++){
        if((i+1)<s.length && dic[s[i]]<dic[s[i+1]]){
            output -= dic[s[i]];
        }else{
            output += dic[s[i]];
        }
    }
    
    return output;
    
};