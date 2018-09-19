/* global $, boardDetails */
'use strict';

const playMechanics = (function(){

  // initial state of gamePlay
  const state = {
    seqArr: [],
    respArr: [],
    strictMode: false,
    count: 0,
    clicks: true
  };

  //render function
  // -- checks for strict mode
  // -- check status of seqArr vs respArr --> separate function
  //    increase counter
  //    end game (disable clicks)
  //    adds one to seqArr and plays (disable clicks)
  // -- checks for end of game
  // -- updated counter
  const strictGameCheck = function(){
    console.log('strict');
  };

  const gameCheck = function(){
    console.log('check for end of game');
  };

  const enableClicks = function(){
    $('.quarter').on('click', quarterClick); 
  };

  const disableClicks = function(){
    $('.quarter').off('click');
  };

  const render = function(){
    if (state.strictMode){
      strictGameCheck();
    }else {
      gameCheck();
    }

    state.count = state.seqArr.length;
  };

  // function to play through seqArr
  // -- enables clicks after it's done and renders
  let i = 0;
  const loopThroughSeqArr = function(){
    if (i < state.seqArr.length){
      setTimeout(function(){
        boardDetails.playRightQ(state.seqArr[i]);
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

  const quarterClick = function(event){
    const id = $(event.target)[0].id;
    boardDetails.playRightQ(id);
    state.respArr.push(id);
    render();
  };

  const handleQuarterClicked = function() {
    $('.quarter').on('click', quarterClick);
  };
  

  // event listener on Start
  // -- enables clicks
  // -- resets seqArr and respArr
  // -- calls render

  const handleStartClicked = function(){
    $('#start-button').on('click', function(event){
      console.log('start button clicked!');
      if (!state.clicks) {
        state.clicks = true;
        enableClicks();
      }
      state.seqArr = [];
      state.respArr = [];
      state.seqArr.push(boardDetails.randomQ());
      render();
    });
  };
  
  // event listener on Strict
  // -- toggles strictMode

  const handleStrictClicked = function(){
    $('#strict-button').on('click', function(event){
      console.log('strict button clicked');
      state.clicks = false;
      console.log(state.clicks);
      disableClicks();
      render();
    });
  };


  const bindEventListeners = function(){
    handleStartClicked();
    handleQuarterClicked();
    handleStrictClicked();
  };

  return {
    bindEventListeners,
    render
  };
})();



