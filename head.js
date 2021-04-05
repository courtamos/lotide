const assertEqual = require('./assertEqual');

const head = function(arr) {
  for (let i = 0; i < arr.length; i ++) {
    if (arr === undefined) {
      return 'undefined';
    } else {
      return arr[0];
    }
  }
};

module.exports = head;