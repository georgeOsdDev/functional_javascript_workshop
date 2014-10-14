function getDependencies(tree, _acc) {
  // SOLUTION GOES HERE
  // Note: Feel free to add additional arguments
  // to this function for use with recursive calls.
  // Or not! There are many ways to recurse.
  "use strict";
  var dependencies = tree.dependencies || {};
  var acc          = _acc || [];

  return Object.keys(dependencies)
              .reduce(function (acc, item) {
                if (acc.indexOf(item + "@" + dependencies[item].version) > 0) { return acc; }
                acc.push(item + "@" + dependencies[item].version);
                acc.concat(getDependencies(dependencies[item], acc));
                return acc;
              }, acc)
        .sort(function (a, b) {
          return a > b ? 1 : -1;
        });
}

module.exports = getDependencies;



// Here's what the official solution is if you want to compare notes:
//
// -----------------------------------------------------------------
//
//
//       function getDependencies(mod, result) {
//         result = result || []
//         var dependencies = mod.dependencies || []
//         Object.keys(dependencies).forEach(function(dep) {
//           var key = dep + '@' + mod.dependencies[dep].version
//           if (result.indexOf(key) === -1) result.push(key)
//           getDependencies(mod.dependencies[dep], result)
//         })
//         return result.sort()
//       }
//
//       module.exports = getDependencies
//
//
// -----------------------------------------------------------------
