/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    
    let rows = grid.length;
    let cols = grid[0].length;
    let visited = new Array(rows).fill(null).map(() => new Array(cols).fill(0));
    let count = 0
    
    const bfs = (i, j) => {
    let queue = []
    queue.push([i, j])
    visited[i][j] = -1
    while (queue.length !== 0) {
        let row = queue[0][0]
        let col = queue[0][1]
        let dir = [[0, 1], [0, -1], [1, 0], [-1, 0]]
        for (let index of dir) {
            r = row + index[0]
            c = col + index[1]
            if (r >= 0 && r < rows && c >=0 && c < cols && visited[r][c] !== -1 && grid[r][c] === '1' ){
                queue.push([r, c])
                visited[r][c] = -1
            }
        }
        queue.shift()
      }
    }
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === '1' && visited[i][j] !== -1) {
                bfs(i, j)
                count++
            }
        }
    }
    

    return count;
    
};