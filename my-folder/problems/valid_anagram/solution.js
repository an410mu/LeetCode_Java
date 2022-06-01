/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let obj1 = {};
    let obj2 = {};
    if (s.length !== t.length) return false;
    s.split('').forEach(function(ele) {
        if (obj1[ele] === undefined) {
            obj1[ele] = 1;
        } else {
            obj1[ele] += 1;
        }
    });

    t.split('').forEach(function(ele) {
        if (obj2[ele] === undefined) {
            obj2[ele] = 1;
        } else {
            obj2[ele] += 1;
        }
    });
    //console.log([obj1,obj2]);
    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;
};