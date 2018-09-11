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

  const handleStartClicked = function(){
    $('#start-button').on('click', function(event){
      
    });
  };

  const playSeqArr = function(){
    addColorToArr();
    addColorToArr();
    console.log(seqArr);
    for (let i of seqArr){
      boardDetails.playRightQ(i);
    }
  };

  const test = function(){
    $('#start-button').on('click', function(event){
      boardDetails.playRightQ('q1');
      console.log('hello');
    });
  };
  return {
    addColorToArr,
    playSeqArr,
    test
  };
})();



