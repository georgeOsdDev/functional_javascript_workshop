var slice = Array.prototype.slice;

function logger(namespace) {
  'use strict';
  // SOLUTION GOES HERE
  return function () {
    console.log.apply(console, [namespace].concat(slice.call(arguments)));
  };
}

module.exports = logger;
