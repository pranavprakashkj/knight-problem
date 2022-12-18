import * as readline from "readline";

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function isValidPosition(x: number, y: number) {
  return x >= 0 && x < 8 && y >= 0 && y < 8;
}

function findKnightMoves(x: number, y: number) {
  const moves = [
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
  const positions = [];

  for (const move of moves) {
    // Calculate the new position for the knight after making the move
    const newX = x + move[0];
    const newY = y + move[1];

    if (isValidPosition(newX, newY)) {
      positions.push([newX, newY]);
    }
  }

  return positions;
}

rl.question("Enter the position. (eg: 22,12,88)", (pos) => {
  const x = parseInt(pos[0]) - 1;
  const y = parseInt(pos[1]) - 1;
  if (isValidPosition(x, y)) {
    const validPos = findKnightMoves(x, y);
    console.log("number of valid positions : " + validPos.length);
    console.log(validPos);
  } else {
    console.log("enter valid position");
  }

  rl.close();
});
// console.log(findKnightMoves(4, 4));
