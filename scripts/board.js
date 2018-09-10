/* global $, playMechanics */
'use strict';

const boardDetails = (function(){

  const q1Clicked = function(){
    $('#q1').on('click', function(event){
      const audioElement = $('#q1Sound')[0];
      const ourElement = $(this);
      audioElement.play();
      const originalColor=ourElement.css('background-color');
      ourElement.css('background-color', 'rgb(0, 0, 100)');
      setTimeout(function(){
        ourElement.css('background-color', originalColor);
      }, 500);
    });
  };

  const q2Clicked = function(){
    $('#q2').on('click', function(event){
      const audioElement = $('#q2Sound')[0];
      const ourElement = $(this);
      audioElement.play();
      const originalColor=ourElement.css('background-color');
      ourElement.css('background-color', 'rgb(102, 0, 0)');
      setTimeout(function(){
        ourElement.css('background-color', originalColor);
      }, 500);
    });
  };

  const q3Clicked = function(){
    $('#q3').on('click', function(event){
      const audioElement = $('#q3Sound')[0];
      const ourElement = $(this);
      audioElement.play();
      const originalColor=ourElement.css('background-color');
      ourElement.css('background-color', 'rgb(153, 99, 0)');
      setTimeout(function(){
        ourElement.css('background-color', originalColor);
      }, 500);
    });
  };

  const q4Clicked = function(){
    $('#q4').on('click', function(event){
      const audioElement = $('#q4Sound')[0];
      const ourElement = $(this);
      audioElement.play();
      const originalColor=ourElement.css('background-color');
      ourElement.css('background-color', 'rgb(0, 60, 0)');
      setTimeout(function(){
        ourElement.css('background-color', originalColor);
      }, 500);
    });
  };

  const bindColorClickers = function(){
    q1Clicked();
    q2Clicked();
    q3Clicked();
    q4Clicked();
  };

  return {
    bindColorClickers
  };
})();