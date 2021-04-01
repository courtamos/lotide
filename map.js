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

// map Function
const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  
  return results;
};

// test case #1
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);


// test case #2
const names = ["courtney", "darian", "kiara", "sully"];
const results2 = map(names, name => name[0]);
assertArraysEqual(results2, ['c', 'd', 'k', 's']);


// test case #3
const fruits = ["strawberry", "blueberry", "kiwi", "pineapple"];
const results3 = map(fruits, fruit => fruit[0]);
assertArraysEqual(results3, ['s', 'b', 'k', 'p']);