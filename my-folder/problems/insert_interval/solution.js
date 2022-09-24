/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    
    //iterate the intervals
    //if interval[end] < new[start], interval[start] > new[end], untouched, add into output array
    //need left, right pointer, if overlap, left = min(old[0], new[0]), right=max(old[1], new[1])
    let output = []
    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i][1] < newInterval[0] ) {
            output.push(intervals[i])
        } else if (newInterval[1] < intervals[i][0]) {
            output.push(newInterval)
            intervals = intervals.slice(i)
            return [...output, ...intervals]
        } else {
            newInterval = [Math.min(newInterval[0], intervals[i][0]), Math.max(newInterval[1], intervals[i][1])]
        }
    }
    output.push(newInterval)
    return output
};