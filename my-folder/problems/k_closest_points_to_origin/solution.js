/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    
    let heap = []
    for (let i = 0; i < points.length; i++) {
        let dist = points[i][0]**2 + points[i][1]**2
        heap.push([dist, points[i]])
    }
    heap.sort((a,b) => a[0] - b[0])
    let output = []
    while (k !== 0) {
        output.push(heap.shift()[1])
        k--
    }
    return output
};




