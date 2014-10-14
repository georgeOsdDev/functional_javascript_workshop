function reduce(arr, fn, initial) {
  'use strict';
  // SOLUTION GOES HERE
  function _reduce(arr, fn, initial, index) {
    'use strict';
    // SOLUTION GOES HERE
    if (!arr.length) return initial;
    var head  = arr[0];
    var tail  = arr.slice(1);
    return _reduce(tail, fn, fn(initial, head, index, arr), index+1);
  }
  return _reduce(arr, fn, initial, 0);
}

module.exports = reduce;


// Here's what the official solution is if you want to compare notes:
// function reduce(arr, fn, initial) {
//   return (function reduceOne(index, value) {
//     if (index > arr.length - 1) return value // end condition
//     return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
//   })(0, initial) // IIFE. kick off recursion with initial values
// }
