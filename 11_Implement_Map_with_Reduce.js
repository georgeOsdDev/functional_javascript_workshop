module.exports = function arrayMap(arr, fn) {
  "use strict";
  // SOLUTION GOES HERE
  return arr.reduce(function(previousValue, currentValue, index, array) {
    previousValue.push(fn(currentValue));
    return previousValue;
  }, []);
};


// Here's what the official solution is if you want to compare notes:
//
// -----------------------------------------------------------------
//
//
//       module.exports = function map(arr, fn) {
//         return arr.reduce(function(acc, item, index, arr) {
//           return acc.concat(fn(item, index, arr))
//         }, [])
//       }
//
//
// -----------------------------------------------------------------
