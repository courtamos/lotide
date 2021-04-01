// assertEqual Function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

// eqObject Function
// returns true is both objects have identical keys with identical values
// otherwise you get back a big fat false

const eqObjects = function(object1, object2) {
  // vars to hold each obj's keys
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  // checking if leangth on both keys is equal, if not return false
  if (keys1.length !== keys2.length) return false;

  // loop over each key in keys1
  for (const key of keys1) {
    // checking if keys in object1 and object2 are arrays
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      // using eqArrays to see if arrays are equal
      if (eqArrays(object1[key], object2[key])) {
        // if arrays are equal continue to loop
        continue;
      } else {
        // if arrays are NOT equal exit loop and return false
        return false;
      }
    }

    // checking if keys are equal, if not return false
    if (object1[key] !== object2[key]) return false;
  }

  // if loop gets to end without returning a false, return true (objs are equal)
  return true;
};

// test cases: primitives
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // false


// test cases: arrays
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // false