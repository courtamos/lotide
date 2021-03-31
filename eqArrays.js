const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// eqArrys function
const eqArrays = function(arr1, arr2) {
  // compare length of arr1 and arr2
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    // loop over both arr1 and arr2
    for (let i = 0; i < arr1.length; i++) {
      // if two values don't match break loop and return false
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    // once loop is completed and all match return true
    return true;
  }
};

// test cases
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

console.log('-----');
// using assertEqual test
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => pass
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => pass

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => pass
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => pass