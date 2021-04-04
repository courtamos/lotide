// eqArrys function
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};

// assertArraysEqual Function
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// flatten takes in an array containing elements including nested arrays
// of elements, and return a "flattened" version of the array


// flatten function
const flatten = function(arr) {
  const newArr = []; // empty array to push into

  for (let i = 0; i < arr.length; i ++) { //loop through arr
    const current = arr[i]; // var to hold current position in loop

    if (!Array.isArray(current)) { // check to see if current is NOT an array
      newArr.push(current); // if NOT array push current into newArr
    }

    for (let j = 0; j < arr[i].length; j ++) { // loop through nested arrays
      newArr.push(current[j]); // push current into newArr
    }
  }

  return newArr;
};

// test code
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
assertArraysEqual(flatten([[1, 2], 3, 4, [5], 6]), [1, 2, 3, 4, 5, 6]);