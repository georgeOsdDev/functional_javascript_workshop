function Spy(target, method) {
  "use strict";
  // SOLUTION GOES HERE
  var spy       = {};
      spy.count = 0;

  var original = target[method];
  target[method] = function(){
    spy.count +=1;
    return original.apply(target, Array.prototype.slice.apply(arguments));
  };
  return spy;
}

module.exports = Spy;
