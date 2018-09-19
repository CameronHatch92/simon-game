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
  // -- enables/disables clicks
  // -- updated counter

  const render = function(){
    console.log('rendered');
  };

  // function to play through seqArr
  // -- enables clicks after it's done and renders
  let i = 0;
  const loopThroughSeqArr = function(){
    if (i < seqArr.length){
      setTimeout(function(){
        boardDetails.playRightQ(seqArr[i]);
        i++;
        loopThroughSeqArr();
      }, 750);
    }
  };

  const playSeqArr = function(){
    i = 0;
    loopThroughSeqArr();
  };


  // event listeners for clicks on quarters
  // -- calls boardDetails.playRightQ(qx)
  // -- calls render

  const handleQuarterClicked = function() {
    $('.quarter').on('click', function(event){
      const id = $(this)[0].id;
      boardDetails.playRightQ(id);
      respArr.push(id);
      render();
    });
  };
  

  // event listener on Start
  // -- enables clicks
  // -- resets seqArr and respArr
  // -- calls render

  const handleStartClicked = function(){
    $('#start-button').on('click', function(event){
      console.log('start button clicked!');
    });
  };
  
  // event listener on Strict
  // -- toggles strictMode

  const handleStrictClicked = function(){
    console.log('strict button clicked');
  };


  const bindEventListeners = function(){
    handleStartClicked();
    handleQuarterClicked();
    handleStrictClicked();
  };

  return {
    bindEventListeners
  };
})();



