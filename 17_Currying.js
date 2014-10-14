function curryN(fn, n) {
  "use strict";
  if (typeof n !== 'number') {
    n = fn.length;
  }

  function getCurriedFn(prev) {
    return function (arg) {
      var args = prev.concat(arg);
      if (args.length < n) {
        return getCurriedFn(args);
      }
      return fn.apply(this, args);
    };
  }

  // Return a curried version of the original function.
  return getCurriedFn([]);
}

module.exports = curryN;
