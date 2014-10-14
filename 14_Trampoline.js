function repeat(operation, num) {
  "use strict";
  // Modify this so it doesn't cause a stack overflow!
  return function () {
    if (num <= 0) { return; }
    operation();
    return repeat(operation, num - 1);
  };
}

function trampoline(fn) {
  "use strict";
  // You probably want to implement a trampoline!
  while (fn && typeof fn === "function") {
    fn = fn();
  }
}

module.exports = function (operation, num) {
  "use strict";
  // You probably want to call your trampoline here!
  return trampoline(function () {
    return repeat(operation, num);
  });
};
