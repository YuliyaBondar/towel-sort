
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let result = [];
    if (!matrix || matrix.length === 0) {
        return result;
    }  
    let i = 0;
    while (i < matrix.length) {
        let a = matrix[i];
        let b = [];
        if (i % 2 === 0) {
            b = a;
        } else {
            b = [...a].reverse();
        }
        result = result.concat(b);
        i += 1;
    }    
    return result;
}
