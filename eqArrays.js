const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) { // compare length of arr1 and arr2
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) { // loop over both arr1 and arr2
      if (arr1[i] !== arr2[i]) { // if two values don't match break loop and return false
        return false;
      }
    }
    return true; // once loop is completed and all match return true
  }
};

module.exports = eqArrays;