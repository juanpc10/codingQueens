
'use strict';



// Implementation with arrays
function calc (size) {

  if (size < 1) return 0;
  
  function genRow (size) {             // Blank row generator
    return Array(size).fill(0);
  }
  function arrSum (arr1, arr2, arr3) {           // Array helpers
    const res = genRow(size);
    for (let i = 0; i < size; i++) {
      (arr1[i] || arr2[i] || arr3[i]) && (res[i] = 1);
    }
    return res;
  }
  function shiftRight (arr) {
    const res = genRow(size);
    for (let i = 0; i < size; i++) {
      if (i < size-1 && arr[i]) res[i+1] = 1;
    }
    return res;
  }
  function shiftLeft (arr) {
    const res = genRow(size);
    for (let i = 1; i < size; i++) arr[i] && (res[i-1] = 1);
    return res;
  }
  const startCol = genRow(size);              // Board and counters
  const startMajDiag = genRow(size);
  const startMinDiag = genRow(size);
  let solutions = 0;
  let pieces = 0;

  function inspect (col, majDiag, minDiag) {       // Recursive inspect
    const newCol = col.slice(0);
    const newMajDiag = shiftRight(majDiag);
    const newMinDiag = shiftLeft(minDiag);
    const row = arrSum(newCol, newMajDiag, newMinDiag);
    for (var i = 0; i < size; i++) {
      if (row[i] === 0) {
        newCol[i] = 1;
        newMajDiag[i] = 1;
        newMinDiag[i] = 1;
        pieces++;
        if (pieces === size) solutions++;
        inspect(newCol, newMajDiag, newMinDiag);
        newCol[i] = 0;
        newMajDiag[i] = 0;
        newMinDiag[i] = 0;
        pieces--;
      }
    }
  }
  inspect(startCol, startMajDiag, startMinDiag);
  return solutions;
}


module.exports = calc;