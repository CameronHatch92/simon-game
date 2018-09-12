/* global $, boardDetails */
'use strict';

const playMechanics = (function(){

  let seqArr = [];

  const randomColor = function(){
    const randNum = Math.floor(Math.random()*4)+1;
    return `q${randNum}`;
  };

  const addColorToArr = function(){
    seqArr.push(randomColor());
  };

  const playSeqArr = function(){
    let i = 0;
    function loop(){
      setTimeout(function(){
        boardDetails.playRightQ(seqArr[i]);
        i++;
        if (i < seqArr.length){
          loop();
        }
      }, 850);
    } 
    loop();
  };

  const q1Clicked = function(){
    $('#q1').on('click', function(event){
      boardDetails.q1Play();
    });
  };

  const q2Clicked = function(){
    $('#q2').on('click', function(event){
      boardDetails.q2Play();
    });
  };

  const q3Clicked = function(){
    $('#q3').on('click', function(event){
      boardDetails.q3Play();
    });
  };

  const q4Clicked = function(){
    $('#q4').on('click', function(event){
      boardDetails.q4Play();
    });
  };

  const handleStartClicked = function(){
    $('#start-button').on('click', function(event){
      playSeqArr();
    });
  };

  const bindEventListeners = function(){
    q1Clicked();
    q2Clicked();
    q3Clicked();
    q4Clicked();
    handleStartClicked();
  };

  return {
    addColorToArr,
    bindEventListeners
  };
})();



