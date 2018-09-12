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
      playSeqArr();
    });
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

  return {
    addColorToArr,
    handleStartClicked
  };
})();



