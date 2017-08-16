/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    var colstart;
    var colend;
    var row;
    var len = matrix.length;
    var i;
    var j;
    var tmp;
    for (colstart = 0, colend = len - 2, row = 0; colstart <= colend; colstart += 1, colend -= 1, row += 1) {
        for (i = colstart, j = row; i <= colend; i += 1) {
            tmp = matrix[i][j];
            matrix[i][j] = matrix[len - j - 1][i];
            matrix[len - j - 1][i] = matrix[len - i - 1][len - j - 1];
            matrix[len - i - 1][len - j - 1] = matrix[j][len - i - 1];
            matrix[j][len - i - 1] = tmp;
        }
    }
};