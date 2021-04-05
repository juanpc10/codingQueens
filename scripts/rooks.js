'use strict';


function calc (size) {
  let counter = 0;
  let pieces = 0;
  let board = [];
  for (let i = 0; i < size; i++) {
    board.push(0);
  }
  function checkMate () {
    for (let i = 0; i < size; i++) {
      if (!board[i]) {
        board[i] = 1;
        pieces++;
        if (pieces === size) counter++;
        checkMate();
        board[i] = 0;
        pieces--;
      }
    }
  }
  checkMate();
  return counter;
}

// let four = 4;
// debugger
// calc(four);


module.exports = calc;
