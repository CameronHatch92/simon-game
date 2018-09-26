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
    let j = state.count-1;
    if (state.seqArr.length === 0){
      state.seqArr.push(boardDetails.randomQ());
      playSeqArr();
    } else if (state.respArr.length < state.seqArr.length){
      for(let k=0; k<state.respArr.length; k++){
        if (state.respArr[k] !== state.seqArr[k]){
          setTimeout(function() {
            alert('Mistake!');
          }, 750);
          setTimeout(playSeqArr, 750);
          state.respArr = [];
        }
      }
    } else if (state.respArr[j] === state.seqArr[j]){
      state.seqArr.push(boardDetails.randomQ());
      setTimeout(playSeqArr, 750);
      state.respArr = [];
    } else {
      setTimeout(function() {
        alert('Mistake!');
      }, 750);
      setTimeout(playSeqArr, 750);
      state.respArr = [];
    }
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
    $('#counter').html(`${state.count}`);
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
    console.log(state.seqArr, state.respArr);
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



