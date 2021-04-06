const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1); // vars to hold each obj's keys
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) { // checking if length on both keys is equal
    return false;
  }

  for (const key of keys1) { // loop over each key in keys1
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) { // checking if keys in object1 and object2 are arrays
      if (eqArrays(object1[key], object2[key])) { // using eqArrays to see if arrays are equal
        continue; // if arrays are equal continue to loop
      } else {
        return false; // if arrays are NOT equal exit loop and return false
      }
    }

    if (object1[key] !== object2[key]) {  // checking if keys are equal, if not return false
      return false;
    }
  }

  return true; // if loop gets to end without returning a false, return true (objs are equal)
};

module.exports = eqObjects;