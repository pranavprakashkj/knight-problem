"use strict";
exports.__esModule = true;
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function isValidPosition(x, y) {
    return x >= 0 && x < 8 && y >= 0 && y < 8;
}
function findKnightMoves(x, y) {
    var moves = [
        [2, 1],
        [2, -1],
        [-2, 1],
        [-2, -1],
        [1, 2],
        [1, -2],
        [-1, 2],
        [-1, -2],
    ];
    // Array to store the valid positions that the knight can reach from the given position
    var positions = [];
    for (var _i = 0, moves_1 = moves; _i < moves_1.length; _i++) {
        var move = moves_1[_i];
        // Calculate the new position for the knight after making the move
        var newX = x + move[0];
        var newY = y + move[1];
        if (isValidPosition(newX, newY)) {
            positions.push([newX, newY]);
        }
    }
    return positions;
}
rl.question("Enter the position. (eg: 22,12,88)", function (pos) {
    var x = parseInt(pos[0]) - 1;
    var y = parseInt(pos[1]) - 1;
    if (isValidPosition(x, y)) {
        var validPos = findKnightMoves(x, y);
        console.log("number of valid positions : " + validPos.length);
        console.log(validPos);
    }
    else {
        console.log("enter valid position");
    }
    rl.close();
});
// console.log(findKnightMoves(4, 4));
