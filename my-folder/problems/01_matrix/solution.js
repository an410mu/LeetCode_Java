/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    
    let output = Array(mat.length).fill(null).map(() => Array(mat[0].length).fill(0))
    let queue = []
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if(mat[i][j] === 0) {
                queue.push([i,j])
                output[i][j] = 0
            } else {
                output[i][j] = -1
            }
        }
    }
    
    //bfs
    while(queue.length !== 0) {
        let dir = [[0, 1], [0, -1], [1, 0], [-1, 0]]
        let r = queue[0][0]
        let c = queue[0][1]
        for (let index of dir) {
            if (r+index[0]>=0 && r+index[0]<mat.length && c+index[1]>=0 && c+index[1]<mat[0].length && output[r+index[0]][c+index[1]] ===-1) {
                queue.push([r+index[0], c+index[1]])
                output[r+index[0]][c+index[1]] = output[r][c] + 1
            }
        }
        queue.shift()
    }
    return output;
};