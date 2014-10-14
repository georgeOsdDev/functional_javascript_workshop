function doubleAll(numbers) {
  'use strict';
  // SOLUTION GOES HERE
  return Array.prototype.map.call(numbers, function (n) { return n * 2; });
}

module.exports = doubleAll;


// Official solution
// module.exports = function doubleAll(numbers) {
//   return numbers.map(function double(num) {
//     return num * 2
//   })
// }
