//*******************CHESSBOARD*********************//
let size = 8; //binding size; 8x8 grid

let chessboard = ""; //empty string

for (let i = 0; i < size; i++) {   //column - adds a new line of data
  for (let j = 0; j < size; j++) { //row - lines that contain the data
    if ((j + i) % 2 == 0) // divisible by 2 determines either " " or # at given position
      chessboard += " ";
    else
      chessboard += "#";
  }
  chessboard += "\n"; // \n is new line
}

console.log(chessboard);
//*******************CHESSBOARD*********************//
