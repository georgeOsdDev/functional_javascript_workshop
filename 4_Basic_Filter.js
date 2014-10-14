// getShortMessages takes an array of objects with '.message' properties and returns an array of messages that are less than < 50 characters long.
function getShortMessages(messages) {
  'use strict';
  // SOLUTION GOES HERE
  return messages.filter(function (m) { return m.message.length < 50; })
                 .map(function (m) {return m.message;});
}
module.exports = getShortMessages;
