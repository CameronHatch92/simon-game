/* global $ */
'use strict';

const playMechanics = (function(){

  let seqArr = [];

  const randomColor = function(){
    const randNum = Math.floor(Math.random()*4)+1;
    return `q${randNum}`;
  };

  const handleStartClicked = function(){
    $('#start-button').on('click', function(event){
      
    });
  };
  return {
    randomColor
  };
})();
