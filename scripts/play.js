/* global $, boardDetails */
'use strict';

const playMechanics = (function(){

  // initial state of gamePlay
  let seqArr = [];
  let respArr = [];
  let strictMode = false;
  let count = 0;
  let clicks = true;

  //render function
  // -- checks for strict mode
  // -- check status of seqArr vs respArr --> separate function
  //    increase counter
  //    end game (disable clicks)
  //    adds one to seqArr and plays (disable clicks)
  // -- checks for end of game
  // -- updated counter

  // function to play through seqArr
  // -- enables clicks after it's done and renders

  // event listeners for clicks on quarters
  // -- calls boardDetails.playRightQ(qx)
  // -- calls render

  // event listener on Start
  // -- enables clicks
  // -- resets seqArr and respArr
  // -- calls render
  
  // event listener on Strict
  // -- toggles strictMode



  const bindEventListeners = function(){

  };

  return {
    bindEventListeners
  };
})();



