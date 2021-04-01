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


// middle Function takes in an arr and returns the middle element(s)
const middle = function(arr) {
  // empty array to hold middle element(s)
  let middleElem = [];

  // arrays with one or two elements have no middle, return empty array
  if (arr.length === 1 || arr.length === 2) {
    return middleElem;
  }

  // finding middle elem of any arr
  const index = Math.floor(arr.length / 2);
  
  // if the arr length is even, push the first middle elm to middleElm
  if (arr.length % 2 === 0) {
    middleElem.push(arr[index - 1]);
  }

  // if arr length is odd or even, push the middle elm to midElm
  middleElem.push(arr[index]);

  // return final arr
  return middleElem;
};

// test cases
console.log(assertArraysEqual(middle([1]), [])); // => []
console.log(assertArraysEqual(middle([1, 2]), [])); // => []'

console.log(assertArraysEqual(middle([1, 2, 3]), [2])); // => [2]
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])); // => [3]

console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])); // => [2, 3]
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])); // => [3, 4]