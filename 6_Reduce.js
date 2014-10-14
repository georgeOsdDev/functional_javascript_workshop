function countWords(inputWords) {
  'use strict';
  // SOLUTION GOES HERE
  return inputWords.reduce(function(previousValue, currentValue, index, array){
    previousValue[currentValue] = (previousValue[currentValue] || 0) + 1;
    return previousValue;
  }, {});
}

module.exports = countWords;
