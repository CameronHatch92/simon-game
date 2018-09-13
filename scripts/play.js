/* global $, boardDetails */
'use strict';

const playMechanics = (function(){

  let seqArr = [];
  let respArr = [];

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

  const checkStatus = function(){
    if(respArr.length <= seqArr.length){
      const i = respArr.length - 1;
      if (respArr[i] !== seqArr[i]){
        restart();
        disableClicks();
      } else if (i === seqArr.length-1){
        goodToGo();
      } 
    }
  };

  const disableClicks = function(){
    $('#q1').prop('disabled', true);
    $('#q2').prop('disabled', true);
    $('#q3').prop('disabled', true);
    $('#q4').prop('disabled', true);
  };

  const enableClicks = function(){
    $('#q1').prop('disabled', false);
    $('#q2').prop('disabled', false);
    $('#q3').prop('disabled', false);
    $('#q4').prop('disabled', false);
  };

  const restart = function(){
    seqArr = [];
    respArr = [];
  };

  const goodToGo = function(){
    respArr = [];
    addColorToArr();
    playSeqArr();

  };

  const q1Clicked = function(){
    $('#q1').on('click', function(event){
      respArr.push('q1');
      checkStatus();
      boardDetails.q1Play();
      console.log(respArr, seqArr);
    });
  };

  const q2Clicked = function(){
    $('#q2').on('click', function(event){
      respArr.push('q2');
      checkStatus();
      boardDetails.q2Play();
      console.log(respArr, seqArr);
    });
  };

  const q3Clicked = function(){
    $('#q3').on('click', function(event){
      respArr.push('q3');
      checkStatus();
      boardDetails.q3Play();
      console.log(respArr, seqArr);
    });
  };

  const q4Clicked = function(){
    $('#q4').on('click', function(event){
      respArr.push('q4');
      checkStatus();
      boardDetails.q4Play();
      console.log(respArr, seqArr);
    });
  };

  const handleStartClicked = function(){
    $('#start-button').on('click', function(event){
      restart();
      addColorToArr();
      playSeqArr();
      enableClicks();
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



