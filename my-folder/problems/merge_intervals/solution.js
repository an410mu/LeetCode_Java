/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    //if interval[i][1] >= interval[i + 1][0]
    //if interval[i][1] < interval[i + 1][0], push to output
    //else new[0] = interval[0]
    let output = []
    intervals = intervals.sort((a,b) => a[0] - b[0])
    let window = intervals[0]
    //console.log(intervals)
    output.push(window)
    for (let i = 0; i < intervals.length; i++) {
        if (window[1] >= intervals[i][0]) {
            window[1] = Math.max(window[1], intervals[i][1])
            window[0] = Math.min(window[0], intervals[i][0])
        } else {
            window = intervals[i]
            output.push(window)
        }
    }
    return output;

};
    
    
//     [1 2] [3 5] [4 7] [6 10] [11 14]
    
//     [1 2] 