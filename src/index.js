
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (arguments.length === 0) return [];
    if (matrix.length === 0) return [];

    let result = [];

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            let columnIndex;
            if (i % 2 === 0){
                columnIndex = j;
            } else {
                columnIndex = matrix[i].length - j - 1;
            }
            result.push(matrix[i][columnIndex]);
        }
        
    }

    return result;
}
