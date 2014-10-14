function repeat(operation, num) {
  "use strict";
  // modify this so it can be interrupted
  if (num <= 0) { return; }
  return setTimeout(function () {
    operation();
    repeat(operation, num - 1);
  }, 0);
}

module.exports = repeat;


// Here's what the official solution is if you want to compare notes:
//
// -----------------------------------------------------------------
//
//
//       function repeat(operation, num) {
//         if (num <= 0) return
//
//         operation()
//
//         // release control every 10 or so
//         // iterations.
//         // 10 is arbitrary.
//         if (num % 10 === 0) {
//           setTimeout(function() {
//             repeat(operation, --num)
//           })
//         } else {
//           repeat(operation, --num)
//         }
//       }
//
//       module.exports = repeat
//
//
// -----------------------------------------------------------------
