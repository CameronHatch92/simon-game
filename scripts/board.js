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

  const q1Clicked = function(){
    $('#q1').on('click', function(event){
      q1Play();
    });
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

  const q2Clicked = function(){
    $('#q2').on('click', function(event){
      q2Play();
    });
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

  const q3Clicked = function(){
    $('#q3').on('click', function(event){
      q3Play();
    });
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


  const q4Clicked = function(){
    $('#q4').on('click', function(event){
      q4Play();
    });
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

  const bindColorClickers = function(){
    q1Clicked();
    q2Clicked();
    q3Clicked();
    q4Clicked();
  };

  return {
    bindColorClickers,
    playRightQ,
    q1Play
  };
})();