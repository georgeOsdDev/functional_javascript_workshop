function repeat(operation, num) {
  'use strict';
  // SOLUTION GOES HERE
  if (num > 0) {
    operation();
    return repeat(operation, num - 1);
  }
}

module.exports = repeat;
