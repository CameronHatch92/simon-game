/* global $, playMechanics */
'use strict';

const boardDetails = (function(){

  const q1Play = function(){
    const audioElement = $('#q1Sound')[0];
    const ourElement = $('#q1');
    audioElement.play();
    const originalColor=ourElement.css('background-color');
    ourElement.css('background-color', 'rgb(0, 0, 100)');
    setTimeout(function(){
      ourElement.css('background-color', originalColor);
    }, 500);
  };

  const q2Play = function(){
    const audioElement = $('#q2Sound')[0];
    const ourElement = $('#q2');
    audioElement.play();
    const originalColor=ourElement.css('background-color');
    ourElement.css('background-color', 'rgb(102, 0, 0)');
    setTimeout(function(){
      ourElement.css('background-color', originalColor);
    }, 500);
  };

  const q3Play = function(){
    const audioElement = $('#q3Sound')[0];
    const ourElement = $('#q3');
    audioElement.play();
    const originalColor=ourElement.css('background-color');
    ourElement.css('background-color', 'rgb(153, 99, 0)');
    setTimeout(function(){
      ourElement.css('background-color', originalColor);
    }, 500);
  };

  const q4Play = function(){
    const audioElement = $('#q4Sound')[0];
    const ourElement = $('#q4');
    audioElement.play();
    const originalColor=ourElement.css('background-color');
    ourElement.css('background-color', 'rgb(0, 60, 0)');
    setTimeout(function(){
      ourElement.css('background-color', originalColor);
    }, 500);
  };

  const playRightQ = function(id){
    switch(id) {
    case 'q1':
      q1Play();
      break;
    case 'q2':
      q2Play();
      break;
    case 'q3':
      q3Play();
      break;
    case 'q4':
      q4Play();
      break;      
    }
  };

  return {
    q1Play,
    q2Play,
    q3Play,
    q4Play,
    playRightQ
  };
})();