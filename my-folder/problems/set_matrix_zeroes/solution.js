/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let index = []
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) index.push([i, j])
        }
    }
    
    for (let item of index) {
        let [r, c] = item 
        change (r, c, matrix)
    }
};

const change = (r, c, matrix) => {
    for (let i = 0; i < matrix[0].length; i++) {
        matrix[r][i] = 0
    }
    for (let i = 0; i < matrix.length; i++) {
        matrix[i][c] = 0
    }
}