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
    $('q1').off('click');
    $('q2').off('click');
    $('q3').off('click');
    $('q4').off('click');
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
      boardDetails.q1Play();
      respArr.push('q1');
      checkStatus();
      console.log(respArr, seqArr);
    });
  };

  const q2Clicked = function(){
    $('#q2').on('click', function(event){
      boardDetails.q2Play();
      respArr.push('q2');
      checkStatus();
      console.log(respArr, seqArr);
    });
  };

  const q3Clicked = function(){
    $('#q3').on('click', function(event){
      boardDetails.q3Play();
      respArr.push('q3');
      checkStatus();
      console.log(respArr, seqArr);
    });
  };

  const q4Clicked = function(){
    $('#q4').on('click', function(event){
      boardDetails.q4Play();
      respArr.push('q4');
      checkStatus();
      console.log(respArr, seqArr);
    });
  };

  const handleStartClicked = function(){
    $('#start-button').on('click', function(event){
      restart();
      addColorToArr();
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



