const {NotImplementedError} = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
    let result = [];
    for (let i = 0; i < matrix.length; i++) {
        let temp = [];
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === true) {
                temp.push(1);
            } else {
                fillObject(i, j);
                let number = checkCoordinates(directions, matrix, i, j)
                temp.push(number)
            }
        }
        result.push(temp)
    }
    console.log(result)
    return result;
}

const directions =
    {
        topLeft: [0, 0],
        top: [0, 0],
        topRight: [0, 0],
        left: [0, 0],
        right: [0, 0],
        bottomLeft: [0, 0],
        bottom: [0, 0],
        bottomRight: [0, 0],
    };

function fillObject(indexRow, IndexCol) {
    directions.topLeft[0] = indexRow - 1;
    directions.topLeft[1] = IndexCol - 1;
    directions.top[0] = indexRow - 1;
    directions.top[1] = IndexCol;
    directions.topRight[0] = indexRow - 1;
    directions.topRight[1] = IndexCol + 1;
    directions.left[0] = indexRow;
    directions.left[1] = IndexCol - 1;
    directions.right[0] = indexRow;
    directions.right[1] = IndexCol + 1;
    directions.bottomLeft[0] = indexRow + 1;
    directions.bottomLeft[1] = IndexCol - 1;
    directions.bottom[0] = indexRow + 1;
    directions.bottom[1] = IndexCol;
    directions.bottomRight[0] = indexRow + 1;
    directions.bottomRight[1] = IndexCol + 1;
}

function checkCoordinates(directions ,matrix, i , j) {
    let count = 0;
    for (let direction in directions){
        const coordinates = directions[direction];
        if (coordinates[0] === -1 || coordinates[0] === matrix.length) continue ;
        if (coordinates[1] === -1 || coordinates[0] === matrix[i].length) continue ;
        if(matrix[coordinates[0]][coordinates[1]] ===  true)  count++
    }
    return count
}



module.exports = {
    minesweeper
};
