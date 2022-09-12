/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    if (image[sr][sc] === color) return image
    change(image, sr, sc, image[sr][sc], color)
    return image;
}

const change = function(image, sr, sc, old, color){
    if (sr<0 || sc<0 || sr>=image.length || sc>=image[0].length || image[sr][sc]!==old) {
        return 
    }
    image[sr][sc] = color
    change(image,sr+1, sc,old, color)
    change(image,sr-1,sc,old,color)
    change(image,sr, sc+1, old, color)
    change(image,sr,sc-1,old, color)
    return image;
}