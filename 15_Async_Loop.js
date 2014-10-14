// function loadUsers(userIds, load, done) {
//   var users = []
//   for (var i = 0; i < userIds.length; i++) {
//     users.push(load(userIds[i]))
//   }
//   return users
// }
//
// module.exports = loadUsers


function loadUsers(userIds, load, done) {
  "use strict";
  var cnt = 0;
  userIds.reduce(function (acc, val, idx, arr) {
    load(val, function (result) {
      acc[idx] = result;
      cnt += 1;
      if (cnt === arr.length) {
        return done(acc);
      }
      return acc;
    });
    return acc;
  }, []);
}

module.exports = loadUsers;


// Here's what the official solution is if you want to compare notes:
//
// -----------------------------------------------------------------
//
//
//       function loadUsers(userIds, load, done) {
//         var completed = 0
//         var users = []
//         userIds.forEach(function(id, index) {
//           load(id, function(user) {
//             users[index] = user
//             if (++completed === userIds.length) return done(users)
//           })
//         })
//       }
//
//       module.exports = loadUsers
//
//
// -----------------------------------------------------------------
