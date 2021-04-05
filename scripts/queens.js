'use strict';


function calc (size) {
  
  if (size === 0) return 0;
  let solutions = 0;

  function checkMate (maxpieces) {
    if (maxpieces.length === size) {
      solutions += 1;
    } else {
      for (let rowi = 0; rowi < size; rowi ++) {
        let coli = 0;
        let queensl; 
        for (queensl = maxpieces.length; coli < queensl; coli ++) {
          const prev = maxpieces[coli];
          if (prev === rowi) {              /// to check the ocupation of last element
            break;
          }
          if (prev - (queensl - coli) === rowi) { 
            break;
          }
          if (prev + (queensl - coli) === rowi) {  
            break;
          }
        }
        if (coli === queensl) {   
          checkMate(maxpieces.concat( [rowi] ));
        }
      }
    }
  }
  checkMate([]);
  return solutions;
}

module.exports = calc;
