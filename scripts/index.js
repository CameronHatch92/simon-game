/* global playMechanics, boardDetails, $ */
'use strict';

const main = function(){
  boardDetails.bindColorClickers();
  playMechanics.test();
};

$(main);