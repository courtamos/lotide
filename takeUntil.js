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

// will return a clice of the array with elems taken from the beginning
// should keep going until the callback returns a truthy value

// takeUntil Function
const takeUntil = function(array, callback) {
  // var for final results
  const results = [];

  // loop through array
  for (let item of array) {
    // if truthy value from callback found don't push item, return results
    if (callback(item)) {
      return results;
    // if item isn't truthy, push itm into results
    } else {
      results.push(item);
    }
  }
  // return final results once loop completed
  return results;
};


// test case #1
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

assertArraysEqual(results1, [1, 2, 5, 7, 2]);

// test case #2
const data2 = [10, 20, 15, 11, 7 ,4 ,9 ,8 ,4 ,40];
const results2 = takeUntil(data2, x => x < 5);

assertArraysEqual(results2, [10, 20, 15, 11, 7]);

// test case #3
const data3 = [10, 20, 15, 11, 7 ,4 ,9 ,8 ,4 ,40];
const results3 = takeUntil(data3, x => x < 0);

assertArraysEqual(results3, [10, 20, 15, 11, 7 ,4 ,9 ,8 ,4 ,40]);