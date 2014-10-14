function duckCount() {
  'use strict';
  // SOLUTION GOES HERE
  var birds = Array.prototype.slice.apply(arguments);
  return birds.filter(function (b) {
    return Object.prototype.hasOwnProperty.call(b, 'quack');
  }).length;
}

module.exports = duckCount;
