const findKeyByValue = function(object, value) {
  const keys = Object.keys(object); // finds all the keys in object['sci_fi', 'comedy', 'drama]

  for (const key of keys) { // loop object keys
    if (object[key] === value) { // on iteration if key is equal to the value return key
      return key;
    }
  }
  return undefined; // if no matches in loop, return undefined
};

module.exports = findKeyByValue;